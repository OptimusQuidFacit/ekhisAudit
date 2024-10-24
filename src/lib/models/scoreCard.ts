//@ts-nocheck
import mongoose, {type Document } from "mongoose";
import { questionType } from "../data";

const scoreCardSchema = new mongoose.Schema({
    period: { type:{quarter:String, year:Number}, required:true},
    LGA: { type: String, required:true},
    facility: { type: String, required:true},
    questions: { type: [{id:Number, isNumber:Boolean, question: String, isAnswered: Boolean, answer: {type:String||Number},  category:String, hasInput:Boolean, hasSelect: Boolean, options:[String]}], required:true},
    checkList: { type: [{id:Number, isNumber:Boolean, question: String, isAnswered: Boolean, answer: {type:String||Number},  isString:Boolean, isNumber:Boolean, isBoolean: Boolean}], required:true},
}, {timestamps: true});
// {time: String, day: Number, month: Number, year: Number}
type periodType={
    quarter: "Q1"|"Q2"|"Q3"|"Q4",
    year: number,
}

export type scoreCardType={
    period:periodType
    LGA:string,
    facility:string,
    questions: questionType[],
    checkList: checkListType[]
}
const ScoreCard = mongoose.models?.ScoreCard || mongoose.model<scoreCardType>('ScoreCard', scoreCardSchema);
export default ScoreCard;