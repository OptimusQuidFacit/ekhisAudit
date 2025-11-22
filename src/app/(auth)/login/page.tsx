"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import { handleLogin } from "@/lib/controller/user";
import { useFormState } from "react-dom";

const login = () => {
    const [state, formAction]= useFormState(handleLogin, undefined)
    return (
        <div className="h-[100vh] justify-center flex items-center">
            <form action={formAction}>
                <Input type="text" name="name" placeholder="Username"/>
                <Input type="password" name="password" placeholder="Password"/>
                <div className="text-center">
                    <Button width="100px" text="Login" color="#F2AE24"/>
                    <p className={`text-sm text-${state?.error?"#f00":"#0f0"}`}>
                        {state?.error}
                    </p>
                </div>
            </form>
        </div>
    );
}

export default login;