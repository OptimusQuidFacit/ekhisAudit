"use server"

import { redirect } from "next/navigation";
import ScoreCard from "../models/scoreCard";
import { connectToDb } from "../config/dbconnection";
import { questions, supervisoryChecklist } from "../data";
import { revalidatePath } from "next/cache";

export const initializeScoreCard= async (prevState:any, formData:any)=>{
    const {LGA, facility, year, quarter} = Object.fromEntries(formData);
    // console.log(LGA, facility, year, quarter)
    if(!LGA||!facility||!year||!quarter){
        return {
            error: "Please complete all fields",
        }
    }
    try {
        connectToDb();
        let period = {year, quarter}; 
        let facilityScoreCard= await ScoreCard.findOne({LGA, facility, "period.year":year, "period.quarter":quarter})
        if(facilityScoreCard){
            // console.log("found")
            // redirect(`/questions/${facilityScoreCard._id}`);
            return {
                msg: facilityScoreCard._id
            }
        }
        else {
            // console.log('Not found');
            let scoreCardObject = new ScoreCard({LGA, facility, period, questions, checkList: supervisoryChecklist})
            let newScoreCard = await scoreCardObject.save();
            // redirect(`/questions/${newScoreCard._id}`);
            return {
                msg: facilityScoreCard._id
            }
        }
        
    }
    catch(err:any){
        console.log(err);
        if(err.message.includes("NEXT_REDIRECT")){
            // throw err;
            console.log(err);
        }
        if(err.message.includes("ETIMEOUT")){
            return {
                error: "Please Check your internet connection"
            }
        }
    }
}

export const updateQuestion = async (prevState: any, formData: any)=>{
    try {
        let {updatedAnswer, scoreCardId, questionId, isAnswered} = Object.fromEntries(formData);
        // console.log(JSON.parse(isAnswered))
        if(updatedAnswer!==0&&!updatedAnswer){
            return {
                error:"Please enter a valid response"
            }
        }
        connectToDb();
        // let hasBeenAnswered=Boolean(isAnswered)
        await ScoreCard.updateOne({_id:scoreCardId, "questions.id": questionId}, 
            {$set:{
                "questions.$.isAnswered":isAnswered?JSON.parse(isAnswered):true,
                "questions.$.answer":updatedAnswer,
            }}, {new: true})
            revalidatePath(`/questions/${scoreCardId}`);
            return{
                msg:"Successfully Updated"
            }
            // console.log("Successfully updated", questionId)
    } catch (error) {
        console.log(error)
    }
}