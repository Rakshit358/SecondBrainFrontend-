import { useRef, useState } from "react";
import CrossIcon from "../../src/assets/crossIcon";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../src/config";

enum ContentType {
     Youtube = "youtube",
     Twitter = "twitter"
}

export default function CreateContentModal(props){
    const titleRef = useRef<any>("");
    const linkRef = useRef<any>("");
    const [type,setType] = useState(ContentType.Youtube);


    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
    
        await axios.post(BACKEND_URL + "/api/v1/content",{
            link,
            title,
            type
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        });
    }

    return (<div>
        {props.open && <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-slate-600/80">
          <div className="flex flex-col justify-center opacity-100">
           <span className="bg-white p-4 opacity-100 rounded"> 
            <div className="flex justify-end">
                <button className="cursor-pointer" onClick={props.onClose}>
                    <CrossIcon />
                </button>
            </div>
                <div>
                    <Input ref={titleRef} placeholder="Title"/>
                    <Input ref={linkRef} placeholder="Link"/>
                </div>
                <div className="flex items-center justify-around p-2"> 
                  <Button variant={type === ContentType.Youtube ? "primary" : "secondary"} size="sm" text="YouTube" onClick={() => setType(ContentType.Youtube)}/>
                  <Button variant={type === ContentType.Twitter ? "primary" : "secondary"} size="sm" text="Twitter" onClick={() => setType(ContentType.Twitter)}/>
                </div>
             <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" size="md" text="Submit"/>
             </div>
           </span>
          </div>
        </div>}
    </div>);
}

