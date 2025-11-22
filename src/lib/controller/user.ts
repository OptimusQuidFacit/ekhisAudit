"use server";
import bcrypt from "bcryptjs"


import { connectToDb } from "../config/dbconnection";
import { signIn, signOut } from "../auth";
import User from "../models/user";
import { signInSchema } from "../zod";
import { ZodError } from "zod";
import { error } from "console";

export const addUser= async (prevState:any, formData:any) => {
    const form = Object.fromEntries(formData);
    try{
        const {name, password}= await signInSchema.parseAsync({name:form.name,password: form.password})
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(password, confirmPassword);
        if(password!==form.confirmPassword){
            return {
                error: "Passwords do not match"
            }
            
        }
        connectToDb();
        // if(!firstname || !password || !lastname || !email){

        // }
        const newUser = new User({
            name, password:hashedPassword
        })
        const user= await User.findOne({name:name});
        if(user){
            return{
                error:"Username already registered"
            }
        }
        await newUser.save();
        return{
            message:'Successful registration'
        }
    }
    catch(err:any){
        console.log(err.message);
        if (err instanceof ZodError){
            return {
                error:err.errors[0].message
            }
        }
        return {
            error: err.message
        }
    }
}

export const handleLogin= async(prevState:any, formData:any)=>{
    const {name, password}= Object.fromEntries(formData);
    try{
        // console.log(name, password)
        await signIn('credentials', {name, password});
    }
    catch(err:any){
        if(err.message.includes("ECONNREFUSED")){
            return {
                error: "Please check your internet connection"
            }
        }
        if(err?.type?.includes('CredentialsSignin')){
            return{
                error: "Invalid Username or password"
            };
        }
        console.log(err);
        throw err;
    }
}

export const handleLogOut = async ()=>{
    await signOut();
}