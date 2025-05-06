import { useRef } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

export default function Signup(){
    const usernameRef = useRef<any>("");
    const passwordRef = useRef<any>(""); 

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
        }) ;
       alert("Sign up successfull");
    }

    return (<div className="h-screen w-screen flex justify-center items-center bg-amber-50">
         <div className="bg-white p-4 rounded border border-slate-300">
            <div className="flex items-center justify-center">
            <h1 className="font-inter text-xl font-semibold">Sign in to your brain</h1>
            </div>
            <Input placeholder="Username" ref={usernameRef}/>
            <Input placeholder="Password" ref={passwordRef}/>
            <div className="flex items-center justify-center p-2">
                 <Button onClick={signup} variant="primary" size="md" text="Login"/>
            </div>
         </div>
    </div>);
}