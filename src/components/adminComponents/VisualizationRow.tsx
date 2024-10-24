"use client"
import { domain } from "@/lib/domainData";
import { useContext, useEffect, useState } from "react";
import { appContext, appcontextType } from "../ContextProvider";
import { questionType } from "@/lib/data";

type props={
    index:number
    facility:string,
    categoryNames:string[]
}
const VisualizationRow = ({facility, categoryNames, index}:props) => {
    const [scoreCard, setScoreCard] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const {adminYear, adminQuarter}= useContext(appContext) as appcontextType
    let query={
        facility:facility,
        year: adminYear,
        quarter: adminQuarter,
    }
    const calculate = (category:string)=>{
        let array= scoreCard?.questions.filter((question:questionType)=>question.category===category)
        let nonPolarQuestions=array.filter((question:questionType)=>!question.isNumber)
        let substandard= array.filter((question:questionType)=> !parseInt(question.answer as string))
        let total=array.length-nonPolarQuestions.length;
        let perc= Math.ceil(((total-substandard.length)/total)*100)
        return perc
    }


    useEffect(() => {
      const fetchData = async ()=>{
        setIsLoading(true)
        const res= await fetch(`${domain}/api/response?query=${encodeURIComponent(JSON.stringify(query))}`);
        const response= await res.json();
        setScoreCard(response);
        setIsLoading(false);
      }
      fetchData()
    }, [adminQuarter, adminYear, facility])
    let noOfAnswered=scoreCard?.questions?.filter((question: questionType)=>question.isAnswered).length;
    let totalNoOfQuestions=scoreCard?.questions?.length;
    let isComplete= noOfAnswered===totalNoOfQuestions;
    // console.log(scoreCard)
    return (
        <div>
            {
            isLoading?
            <p className="text-sm p-2">
                Loading...
            </p>:
            <div className="flex items-center">
                <p className="text-sm flex-[3] p-2">
                   {index}.{") "}{facility}
                   <span className=" text-xs font-bold">
                    {!isComplete&&" - Not Completed"} {!scoreCard&& "- Not Commenced"}
                   </span>
                </p>
                {
                    scoreCard&&isComplete&&
                    <>
                        {
                            categoryNames.map(category=>
                                <div className="flex-[0.5] border-l-[1px] border-primary flex justify-center" key={category}>
                                    <p style={{color: `${calculate(category)>50?"#0d0":"#d00"}`}} className=" text-sm p-2">
                                        {calculate(category)}%
                                    </p>
                                </div>
                            )
                        }
                    </>
                }
            </div>
            }
        </div>
    );
}

export default VisualizationRow;