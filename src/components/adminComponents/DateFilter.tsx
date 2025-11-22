"use client"

import { useContext } from "react";
import { appContext, appcontextType } from "../ContextProvider";
import { usePathname } from "next/navigation";

const DateFilter = () => {
    const pathname= usePathname();
    const date= new Date()
const {setAdminQuarter, setAdminYear}= useContext(appContext) as appcontextType
    return (
        <>
            {!pathname.startsWith("/admin/responses")&&
            <div className="flex px-3 justify-between">
                <select onChange={(e)=>setAdminQuarter(e.target.value)} defaultValue={"Q1"} className="border-primary border-2 p-2 w-[100px] rounded-xl" name="quarter" id="quarter">
                    <option>Q1</option>
                    <option>Q2</option>
                    <option>Q3</option>
                    <option>Q4</option>
                </select>
                <input onChange={(e)=>setAdminYear(parseInt(e.target.value))} className="border-primary border-2 p-2 w-[100px] rounded-xl" type="number" name="year" id="year" defaultValue={date.getFullYear()}/>
            </div>
            }
        </>
    );
}

export default DateFilter;