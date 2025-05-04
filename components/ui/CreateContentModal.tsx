import CrossIcon from "../../src/assets/crossIcon";
import Button from "./Button";

export default function CreateContentModal(props){
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
                    <Input placeholder="Title"/>
                    <Input placeholder="Link"/>
                </div>
             <div className="flex justify-center">
                <Button variant="primary" size="md" text="Submit"/>
             </div>
           </span>
          </div>
        </div>}
    </div>);
}

function Input({onChange,placeholder}:{onChange: () => void}){
    return <div>
        <input placeholder={placeholder} type="text" className="font-inter px-4 py-2 outline-none border m-2 rounded-2xl" onChange={onChange}></input>
    </div>
}