import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Signin(){
    return (<div className="h-screen w-screen flex justify-center items-center bg-amber-50">
         <div className="bg-white p-4 rounded border border-slate-300">
            <div className="flex items-center justify-center">
            <h1 className="font-inter text-xl font-semibold">Get started with your brain</h1>
            </div>
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <div className="flex items-center justify-center p-2">
                 <Button variant="primary" size="md" text="Sign in"/>
            </div>
         </div>
    </div>);
}