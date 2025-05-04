import SidebarItem from "./SidebarItem"

export default function Sidebar(){
    return <div className="h-screen w-72 fixed border-r left-0 top-0 border-amber-50">
       <SidebarItem text="Tweets"/>
       <SidebarItem text="Articles"/>
       <SidebarItem text="Youtube Videos"/>
    </div>
}