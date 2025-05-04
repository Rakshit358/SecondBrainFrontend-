export interface ButtonProps{
    variant: "primary" | "secondary";
    size : "sm" | "md" | "lg";
    text : string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
};

export default function Button (props:ButtonProps) {
  if(props.variant === "primary"){
    if(props.size == "sm"){
        return <button  onClick={props.onClick} className="bg-black font-inter p-2 rounded-xl text-white text-xs cursor-pointer outline-none">{props.text}</button> 
    }else if(props.size == "md"){
        return <button  onClick={props.onClick} className="bg-black font-inter p-2 rounded-xl text-white text-sm cursor-pointer outline-none">{props.text}</button> 
    }else{
        return <button  onClick={props.onClick} className="bg-black font-inter p-2 rounded-xl text-white cursor-pointer outline-none">{props.text}</button> 
    }
   }else{
    if(props.size == "sm"){
        return <button  onClick={props.onClick} className="bg-white border border-gray-400 font-inter cursor-pointer p-2 rounded-xl text-slate-800 text-xs outline-none">{props.text}</button> 
    }else if(props.size == "md"){
        return <button  onClick={props.onClick} className="bg-white border border-gray-400 font-inter cursor-pointer p-2 rounded-xl text-slate-800 text-sm outline-none">{props.text}</button> 
    }else{
        return <button  onClick={props.onClick} className="bg-white border border-gray-400 font-inter cursor-pointer p-2 rounded-xl text-slate-800 outline-none">{props.text}</button> 
    }
  }
}