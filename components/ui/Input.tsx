export default function Input({placeholder,ref}:{ ref?:any ;  placeholder:string}){
    return <div>
        <input ref={ref} placeholder={placeholder} type="text" className="font-inter px-4 py-2 outline-none border m-2 rounded-2xl" ></input>
    </div>
}

