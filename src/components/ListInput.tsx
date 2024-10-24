"use client"

import { Dispatch, SetStateAction, useState } from "react";

type props={
    value:string|null,
    onChange:Dispatch<SetStateAction<string | null>>,
    title:string,
    placeHolder: string,
    options:string[]
}
const ListInput = ({options, title, placeHolder, onChange, value}:props) => {
    const [showOptions, setShowOptions] = useState(false);
    // const [value, setValue] = useState<string>('')
    return (
        <>
                <input autoComplete="off" value={value as string} onChange={(e)=>onChange(e.target.value)}  className="p-2 border-secondary border-2 w-[150px] rounded-xl" type="text" name={title} id={title} placeholder={placeHolder} onBlur={()=>setTimeout(()=>setShowOptions(false),200)} onFocus={()=>setShowOptions(true)}/>
                {showOptions&&
                <div className="z-20 absolute left-0 top-[45px] bg-secondary text-white shadow-lg">
                    {
                        options.filter(item=>!value?true:item.toLowerCase().includes(value?.toLowerCase() as string))
                        .map(option=>
                            <option onClick={()=>onChange(option)} className="text-white cursor-pointer hover:bg-white hover:text-black px-3">
                                {option}
                            </option>
                        )
                    }
                </div>}
        </>
    );
}

export default ListInput;