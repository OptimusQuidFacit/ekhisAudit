"use client"

import { useFormStatus } from "react-dom";
import Loading from "./loader/Loading";

const PrevButton = () => {
    const {pending} = useFormStatus();
    return (
        <button className="hover:shadow-[0_0_15px_3px_#F1B227] my-3 ms-2 p-2 text-sm rounded-xl bg-secondary text-white">
            {pending? <Loading/>: "Prev"}
        </button>
    );
}

export default PrevButton;