"use client"
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import { initializeScoreCard } from "@/lib/controller/questionActions";
import ListInput from "./ListInput";
import { LGAs } from "@/lib/data";
import { useEffect, useState } from "react";
import { findFacilitiies } from "@/lib/config/utilities";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const InitialForm = () => {
    const [LGA, setLGA] = useState<string|null>(null);
    const [facility, setFacility] = useState<string|null>(null);
    const [state, formAction]= useFormState(initializeScoreCard, null);
    const date= new Date();
    // let router= useRouter();
    // useEffect(() => {
    // state?.msg&&router.push(`/questions/${state.msg}`)
    // }, [state])
    
    return (
        <form action={formAction} className="m-3 w-[300px] h-[450px] flex flex-col items-center justify-center gap-3 glass p-6 rounded-xl shadow-lg backdrop-blur-lg bg-white/30 border border-white/30">
            <h1 className="text-lg md:text-xl text-secondary font-bold text-center">
                Welcome! Start your M&E session...
            </h1>
            <div className="relative">
                <ListInput value={LGA} onChange={setLGA} placeHolder="LGA" title="LGA" options={LGAs}/>
            </div>
            <div className="relative">
                <ListInput value={facility as string} onChange={setFacility} placeHolder="Facility" title="facility" options={findFacilitiies(LGA as string)}/>
            </div>
            <div>
                <input defaultValue={date.getFullYear()} className="p-2 border-secondary border-2 w-[150px] rounded-xl" type="number" min={2000} name="year" id="year"/>
            </div>
            <div>
                <select defaultValue={"Q1"} className="p-2 border-secondary border-2 w-[150px] rounded-xl" name="quarter" id="quarter">
                    <option>Q1</option>
                    <option>Q2</option>
                    <option>Q3</option>
                    <option>Q4</option>
                </select>
            </div>
            <div>
                <SubmitButton text="Start"/>
            </div>
            <div>
                {state?.error&&
                <p className="text-[#ff0000]">
                    {state.error}
                </p>}
            </div>
        </form>
    );
}

export default InitialForm;