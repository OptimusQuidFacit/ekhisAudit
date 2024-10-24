import { questionType } from "@/lib/data";
import Link from "next/link";

const ResponseRow = ({response}:{response:any}) => {
    let noOfAnswered=response.questions.filter((question: questionType)=>question.isAnswered).length;
    let totalNoOfQuestions=response.questions.length;
    let totalNoOfChecklist=response.checkList.length;
    let noOfAnsweredChecklist = response.checkList.filter((question: questionType)=>question.isAnswered).length;
    let checklistComplete=totalNoOfChecklist===noOfAnsweredChecklist;
    let answerComplete= totalNoOfQuestions===noOfAnswered;
    return (
        <>
            <p style={{borderColor:`${answerComplete?"#0f0":"#f00"}`, color:`${answerComplete?"#0f0":"#f00"}`}}
            className="text-center border-[1px] absolute left-[20px] top-[-10px] text-sm bg-white px-1 rounded-lg text-secondary">
                {noOfAnswered===totalNoOfQuestions?"Scorecard Completed": `ScoreCard not completed, ${noOfAnswered} out of ${totalNoOfQuestions}`}
            </p>
            <p style={{borderColor:`${checklistComplete?"#0f0":"#f00"}`, color:`${checklistComplete?"#0f0":"#f00"}`}}
            className="text-center border-[1px]  absolute right-[20px] top-[-10px] text-sm bg-white px-1 rounded-lg text-secondary">
                {noOfAnsweredChecklist===totalNoOfChecklist?"Checklist Completed": `Checklist not completed, ${noOfAnsweredChecklist} out of ${totalNoOfChecklist}`}
            </p>
            <Link className="text-center hover:text-secondary" href={`/admin/responses/${response._id}`}>
                {response.facility}
            </Link>
        
        </>
    );
}

export default ResponseRow;