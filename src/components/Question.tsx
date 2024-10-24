"use client"
import { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { questionType } from "@/lib/data";
import { useFormState, useFormStatus } from "react-dom";
import { updateQuestion } from "@/lib/controller/questionActions";
import { appContext, appcontextType } from "./ContextProvider";
// import { revalidatePath } from "next/cache";
import PrevButton from "./PrevButton";

type props= {
    scoreCardId:string,
    question:questionType
    categoryCount:number,
    questionIndex:number
}
const Question = ({question, scoreCardId, categoryCount, questionIndex}:props) => {
    // let question=getQuestion(id);
    // const [answer, setAnswer] = useState<number|string>('')
    const [state, formAction]= useFormState(updateQuestion, null);
    const formRef = useRef<HTMLFormElement>(null)

    const resetForm=()=>{
        formRef.current?.reset()
    }
    // let {pending} = useFormStatus();
    // console.log(answer);
    // const {isLoading}= useContext(appContext) as appcontextType;

    // console.log("Is loading state is ", isLoading);


    // const yesClick=(e:React.ChangeEvent<HTMLButtonElement>)=>{
    //     setAnswer(1);
    // }
    // const noClick=(e:React.ChangeEvent<HTMLButtonElement>)=>{
    //     setAnswer(0);
    // }
    // useEffect(() => {
    //     !pending&& revalidatePath(`/questions/${scoreCardId}`, "page");
    // }, [pending])

    
    return (
        <>
            {
                false?
                <p className="text-center w-[300px]">
                    Loading
                </p>:
                <>
                    {question?.id as number >1&&
                    <form className="self-start" action={formAction}>
                        <input type="hidden" name="isAnswered" value="false"/>
                        <input type="hidden" name="updatedAnswer" value={0}/>
                        <input type="hidden" name="scoreCardId" value={scoreCardId}/>
                        <input type="hidden" name="questionId" value={question.id as number - 1}/>
                        <PrevButton/>
                    </form>}
                    <h2 className="text-sm md:text-lg mx-auto mb-7 bg-primary text-lg text-white p-3 flex flex-col justify-center items-center gap-2 rounded-xl">
                        <p className="text-center font-bold">
                            {question.category}
                        </p>
                        <p className="font-bold w-[70px] mx-auto bg-white rounded-xl md:text-sm  p-1 text-black text-center">
                            {questionIndex} of {categoryCount}
                        </p>
                    </h2>          
                    <h1 className="md:p-3 text-center md:text-start p-2 text-secondary text-lg md:text-xl font-bold">
                        {question?.question}
                    </h1>
                    {question?.hasInput||question?.hasSelect?
                    <>
                    {   question?.hasInput?   
                        <div className="w-[200px] mx-auto">
                            <form ref={formRef}
                             action={async (formData) => {
                                await formAction(formData);
                                formRef.current?.reset()
                              }}             
                            className="flex flex-col justify-center">
                                <input defaultValue={question?.isNumber?1:""} className="focus:border-0 p-1 border-b-2 border-primary" type={question.isNumber?"number":"text"} name="updatedAnswer" id="updatedAnswer" autoComplete="off" />
                                {/* <input type="hidden" name="updatedAnswer" value={1}/> */}
                                <input type="hidden" name="scoreCardId" value={scoreCardId}/>
                                <input type="hidden" name="questionId" value={question.id}/>
                                <div className="mt-5 text-center">
                                    <Button width="100px" text="Proceed" color="#F2AE24"/>
                                </div>
                            </form>
                        </div>:
                        <div className="mt-5 mx-auto">
                            <form action={formAction} className="flex flex-col justify-center">
                            <input type="hidden" name="scoreCardId" value={scoreCardId}/>
                            <input type="hidden" name="questionId" value={question.id}/>
                                <select className="p-2 rounded-xl border-primary border-2 w-[150px]" name="updatedAnswer" id="updatedAnswer">
                                    {
                                        question?.options?.map(option=>
                                            <option value={option} key={option}>{option}</option>
                                        )
                                    }
                                </select>
                                <div className="mt-5 text-center">
                                    <Button width="100px" text="Proceed" color="#F2AE24"/>
                                </div>
                
                                
                            </form>
                        </div>
                    }
                    </>
                    :
                    <div className="flex justify-center gap-5 mt-5">
                        <form action={formAction}>
                            <input type="hidden" name="updatedAnswer" value={1}/>
                            <input type="hidden" name="scoreCardId" value={scoreCardId}/>
                            <input type="hidden" name="questionId" value={question.id}/>
                            <Button  text="Yes" color="green"/>
                        </form>
                        <form action={formAction}>
                            <input type="hidden" name="updatedAnswer" value={0}/>
                            <input type="hidden" name="scoreCardId" value={scoreCardId}/>
                            <input type="hidden" name="questionId" value={question.id}/>
                            <Button text="No" color="red"/>
                        </form>
                    </div>}
                    {state?.error &&
                    <p className="mt-3 text-[#f00] text-sm text-center font-semibold">
                        {state.error}
                    </p>
                    }
                </>
            }
        </>
    );
}

export default Question;