export default function SidebarItem({text}:string){
  return <div className="hover:text-black hover:bg-gray-100 flex text-start pl-2 pb-2 pt-1 cursor-pointer items-center font-inter text-slate-600">
     {text}
  </div>
}