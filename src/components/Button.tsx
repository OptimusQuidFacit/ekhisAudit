import { useContext, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { appContext, appcontextType } from "./ContextProvider";
import Loading from "./loader/Loading";

type props={
    text:string,
    color:string,
    handleClick?:(e:any)=>void,
    width?:string

}
const Button = ({text, color, handleClick, width}:props) => {
    const { setIsLoading}= useContext(appContext) as appcontextType
    const { pending } = useFormStatus();
    // useEffect(() => {
    //     setIsLoading(pending);
    //     // return ()=>{
    //     //     setIsLoading(false)
    //     // }
    // }, [pending])
    
    return (
        <button onClick={handleClick} style={{background:`${color}`, width:width&&width}} className="hover:shadow-[0_0_20px_7px_#F1B227] w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-xl text-white text-sm font-semibold">
            {pending?<Loading/>:text}
        </button>
    );
}

export default Button;