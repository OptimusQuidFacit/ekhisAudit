"use client"
import { useContext, useEffect, useRef, useState } from "react";
import Button from "./Button";
import { checkListType, questionType } from "@/lib/data";
import { useFormState, useFormStatus } from "react-dom";
import { } from "@/lib/controller/questionActions";
import { appContext, appcontextType } from "./ContextProvider";
// import { revalidatePath } from "next/cache";
import PrevButton from "./PrevButton";
import { updateChecklist } from "@/lib/controller/checklistActions";

type props= {
    scoreCardId: string,
    question: checkListType
    // categoryCount:number,
    // questionIndex:number
}
const CheckList = ({question, scoreCardId}:props) => {
    // let question=getQuestion(id);
    // const [answer, setAnswer] = useState<number|string>('')
    const [state, formActionTwo]= useFormState(updateChecklist, undefined);
    const formRef = useRef<HTMLFormElement>(null)

    const resetForm = () => {
        formRef.current?.reset();
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
                    <form className="self-start" action={formActionTwo}>
                        <input type="hidden" name="isAnswered" value="false"/>
                        <input type="hidden" name="updatedAnswer" value={0}/>
                        <input type="hidden" name="scoreCardId" value={scoreCardId}/>
                        <input type="hidden" name="questionId" value={question.id as number - 1}/>
                        <PrevButton/>
                    </form>}
                    <h1 className="md:p-3 text-center md:text-start p-2 text-secondary text-lg md:text-xl font-bold">
                        {question?.question}
                    </h1>
                    {question?.isString||question?.isNumber?
                    // <>
                    // {   question?.hasInput?   
                        <div className="w-[200px] mx-auto">
                            <form ref={formRef}
                             action={formActionTwo}             
                            className="flex flex-col justify-center">
                                <input defaultValue={question?.isNumber?1:""} className="focus:border-0 p-1 border-b-2 border-primary" type={question.isNumber?"number":"text"} name="updatedAnswer" id="updatedAnswer" autoComplete="off" />
                                {/* <input type="hidden" name="updatedAnswer" value={1}/> */}
                                <input type="hidden" name="scoreCardId" value={scoreCardId}/>
                                <input type="hidden" name="questionId" value={question.id}/>
                                <div className="mt-5 text-center">
                                    <Button width="100px" text="Proceed" color="#F2AE24"/>
                                </div>
                            </form>
                        </div>
                    // }
                    // </>
                    :
                    <div className="flex justify-center gap-5 mt-5">
                        <form action={formActionTwo}>
                            <input type="hidden" name="updatedAnswer" value={1}/>
                            <input type="hidden" name="scoreCardId" value={scoreCardId}/>
                            <input type="hidden" name="questionId" value={question.id}/>
                            <Button  text="Yes" color="green"/>
                        </form>
                        <form action={formActionTwo}>
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

export default CheckList;