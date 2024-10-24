"use client"

import { useContext, useEffect, useState } from "react";
import { appContext, appcontextType } from "../ContextProvider";
import { domain } from "@/lib/domainData";
import AdminLoader from "./AdminLoader";
import ResponseRow from "./ResponseRow";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

const ResponsePage = () => {
    const {adminYear, adminLGA, adminQuarter} = useContext(appContext) as appcontextType;
    let query={
        year:adminYear,
        LGA: adminLGA,
        quarter: adminQuarter
    }
    const [responses, setResponses] = useState<any>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        const fetchResponses = async ()=>{
            setIsLoading(true)
            let res = await fetch(`${domain}/api/responses?query=${encodeURIComponent(JSON.stringify(query))}`);
            let responseData= await res.json();
            setResponses(responseData);
            // console.log(responses);

            setIsLoading(false);
           ;
        }
        fetchResponses();
    }, [adminLGA, adminQuarter, adminYear])
    return (
        <div className="h-full">
            {
                isLoading ?
                <div className="h-full w-[95vw] md:w-full flex items-center justify-center">
                    <AdminLoader/>
                </div>:               
                <div className="flex flex-col gap-4">
                    {responses?.length>0?
                    responses?.map((response:any, index:any)=>
                        <div key={index} className="relative shadow-xl flex justify-between items-center rounded-xl p-3 my-2 bg-primary text-white">
                            <ResponseRow response={response}/>
                        </div>
                    ):
                    <div className="opacity-[0.5]">
                        No response has been submitted for this selection
                    </div>
                }
                </div>

            }
        </div>
    );
}

export default ResponsePage;