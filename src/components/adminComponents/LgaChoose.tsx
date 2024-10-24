"use client"

import { useContext } from "react";
import { appContext, appcontextType } from "../ContextProvider";
import { LGAs } from "@/lib/data";
import { usePathname } from "next/navigation";

const LgaChoose = () => {
    const pathname=usePathname()
    const {setAdminLGA}= useContext(appContext) as appcontextType;
    return (
            <div>
                {!pathname.startsWith("/admin/responses")&&
                <select onChange={(e)=>setAdminLGA(e.target.value)} className="w-[100px] md:w-[150px] bg-primary rounded-xl p-3 text-white text-sm md:text-md" name="lga" id="lga">
                    {LGAs.map(lga=>
                        <option  key={lga} value={lga}>
                           {lga}
                        </option>
                    )
                    }
                </select>}
            </div>
    );
}

export default LgaChoose;