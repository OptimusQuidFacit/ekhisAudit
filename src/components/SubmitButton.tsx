"use client"

import { useFormStatus } from "react-dom"
import Loading from "./loader/Loading"

type props= {
    text: string
}
const SubmitButton = ({text}:props) => {
    const {pending} = useFormStatus();
    return (
       <button className="hover:shadow-[0_0_15px_3px_#F1B227] border-secondary w-full text white bg-secondary rounded-xl p-3 text-white font-semibold">
        {!pending?text:<Loading/>}
       </button>
    );
}

export default SubmitButton;