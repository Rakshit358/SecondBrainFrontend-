import { useRef, useState } from "react";
import CrossIcon from "../../src/assets/crossIcon";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../../src/config";

export default function CreateContextModal(props) {
    const queryRef = useRef<any>("");
    const [result, setResult] = useState("");

    async function getContext() {
        setResult("");
        const contentTitle = props.content.title;
        const contentLink = props.content.link;
        const queryValue = queryRef.current.value;

        console.log("Content is " + contentTitle);
        console.log("Link is " + contentLink);
        console.log("Query is " + queryValue);

        const data = {
            param1: contentLink,
            param2: queryValue
        };

        try {
            const response = await axios.get(BACKEND_URL + "/api/v1/context", {
                params: data,
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });
            console.log(response.data.message);
            setResult(response.data.message);
        } catch (error) {
            console.error("Error fetching context:", error);
            setResult("Error fetching data.");
        }
    }

    return (
        <div>
            {props.open && (
                <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-slate-600/80 z-50">
                   
                    <div className="bg-white p-6 rounded-xl shadow-lg w-full h-full flex flex-col justify-between">
                            <div className="flex justify-end w-full"> 
                            <button className="cursor-pointer" onClick={props.onClose}>
                                <CrossIcon />
                            </button>
                            </div>

                        <div className="flex items-center justify-around p-2">
                            <textarea
                                disabled
                                value={result}
                                className="w-full h-80 text-slate-700 p-2 font-inter outline-none border rounded-xl border-slate-600 resize-none"
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <input ref={queryRef} placeholder="Enter..." className="w-full border p-2 rounded-xl outline-none font-inter"/>
                            <Button variant="primary" size="md" text="Search" onClick={getContext} />
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}
