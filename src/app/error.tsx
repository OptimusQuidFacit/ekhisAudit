"use client"

import { useRouter } from "next/navigation";


const error = () => {
    const router= useRouter()
    return (
        <div className="h-full bg-white text-center">
            <p className="text-xl p-5 text-center text-primary">
                An error occured. Please check your internet connection and try again
            </p>
            <button onClick={()=>router.back()} className="rounded-xl mt-5 p-3 text-white bg-secondary">
                Go back
            </button>

        </div>
    );
}

export default error;