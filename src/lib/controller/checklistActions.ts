"use server"
import { revalidatePath } from "next/cache";
import ScoreCard from "../models/scoreCard";
import { connectToDb } from "../config/dbconnection";

export const updateChecklist = async (prevState: any, formData: any)=>{
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
        await ScoreCard.updateOne({_id:scoreCardId, "checkList.id": questionId}, 
            {$set:{
                "checkList.$.isAnswered":isAnswered?JSON.parse(isAnswered):true,
                "checkList.$.answer":updatedAnswer,
            }}, {new: true})
            revalidatePath(`/checklist/${scoreCardId}`);
            return{
                msg:"Successfully Updated"
            }
            // console.log("Successfully updated", questionId)
    } catch (error) {
        console.log(error)
    }
}