import axios from "axios";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin(){

     const navigate = useNavigate();
     const usernameRef = useRef<any>("");
     const passwordRef = useRef<any>(""); 
 
     async function signin(){
         const username = usernameRef.current?.value;
         const password = passwordRef.current?.value;
         const res = await axios.post(BACKEND_URL + "/api/v1/signin", {
                 username,
                 password
         }) ;
         console.log(res);
         const token = res.data.token;
         localStorage.setItem("token",token)
        alert("Sign in successfull");
        navigate("/dashboard");
     }
return (<div className="h-screen w-screen flex justify-center items-center bg-amber-50">
         <div className="bg-white p-4 rounded border border-slate-300">
            <div className="flex items-center justify-center">
            <h1 className="font-inter text-xl font-semibold">Get started with your brain</h1>
            </div>
            <Input ref={usernameRef} placeholder="Username"/>
            <Input ref={passwordRef} placeholder="Password"/>
            <div className="flex items-center justify-center p-2">
                 <Button onClick={signin} variant="primary" size="md" text="Sign in"/>
            </div>
         </div>
    </div>);
}