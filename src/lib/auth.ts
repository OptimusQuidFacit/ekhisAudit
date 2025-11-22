import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { connectToDb } from "./config/dbconnection";
import User, { userType } from "./models/user";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials: any)=>{
    try{
        connectToDb();
        const {name, password} = credentials;
        const user= await User.findOne({name});
        if(!user){
          throw new Error("Username is not registered");
        }
        const passwordIsCorrect= await bcrypt.compare(password, user.password)
        if(passwordIsCorrect) return user;
        return null;
      }
      catch(err){
        
        throw new Error('Something went Wrong while trying to login with credentials')
      }
    }
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({     
        credentials: {
            name:{},
            password:{}
        },
        authorize: async (credentials:any) => {
            try{

                let user = await login(credentials)
                return user
            }
            catch(err) {
                console.log(err);
                return null        
            }
     
          }
        })
    ],
    callbacks: {
        async signIn({user}:any){
                              
            //include the admin property as part of the returned user which is used to set the token and then the session in the auth.config file
           
            let returnedUser= await User.findOne({name: user.name}) as userType;
            user.isAdmin=returnedUser.isAdmin;
            return true;
        },
        ...authConfig.callbacks
      }
    })