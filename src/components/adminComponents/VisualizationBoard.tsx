"use client"

import { useContext } from "react"
import { appContext, appcontextType } from "../ContextProvider"
import { findFacilitiies } from "@/lib/config/utilities"
import VisualizationRow from "./VisualizationRow"

type props={
    categoryNames: string[]
}
const VisualizationBoard = ({categoryNames}:props) => {
    let {adminLGA}= useContext(appContext) as appcontextType;
    const facilities= findFacilitiies(adminLGA);
    // console.log(adminLGA, facilities);
    return (
        <div className=" rounded-xl bg-white shadow-xl w-full">
            <div className="rounded-t-xl bg-primary p-5">
                <h1 className="text-white text-xl text-center font-semibold">
                    {`Results for ${adminLGA}`}
                </h1>
            </div>
            <div className="flex w-full h-full flex items-center">
                <p className="p-2 font-bold flex-[3]">
                    Facility
                </p>
                <>
                    {
                        categoryNames.map(category=>
                            <div key={category} className="flex-[0.5] border-primary border-l-[1px] flex items-center justify-center">
                                <p className="text-clip p-1 font-bold rotate-180 text-xs  text-start flex items-center"
                                style={{
                                    writingMode: 'vertical-rl',
                                    columnCount: 2,
                                    columnGap: '0.5em', // Adjust gap between columns
                                    height: '10.5em', // Ensure container height to force column split
                                    whiteSpace: 'normal' // Allow text to break into columns
                                 }}>
                                    {category}
                                </p>
                            </div>
                        )
                    }
                </>
            </div>
            {
                facilities.map((facility, index)=>
                    <div key={facility}>
                        <div className="border-t-[2px] border-primary">
                            <VisualizationRow index={index+1} categoryNames={categoryNames} facility={facility}/>  
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default VisualizationBoard;