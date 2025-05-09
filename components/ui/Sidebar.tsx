import SidebarItem from "./SidebarItem"

export default function Sidebar(){
    return <div className="h-screen w-72 fixed border-r left-0 top-0 border-amber-50 pt-4">
       <SidebarItem text="Home"/>
       <SidebarItem text="Tweets"/>
       <SidebarItem text="Youtube Videos"/>
    </div>
}