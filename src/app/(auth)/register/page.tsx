"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import { addUser } from "@/lib/controller/user";
import { useFormState } from "react-dom";

const page = () => {
        const [state, formAction]= useFormState(addUser, undefined)
    return (
        <div className="h-[100vh] justify-center flex items-center">
        <form action={formAction}>
            <Input type="text" name="name" placeholder="Enter username"/>
            <Input type="password" name="password" placeholder="Password"/>
            <Input type="password" name="confirmPassword" placeholder="Confirm password"/>
            <div className="text-center">
                <Button width="100px" text="Register" color="#F2AE24"/>
                <p className={`text-sm text-${state?.error?"#fff":"#f01"}`}>
                    {state?.error || state?.message}
                </p>
            </div>
        </form>
    </div>
    );
}

export default page;