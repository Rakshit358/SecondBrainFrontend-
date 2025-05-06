import { useState } from "react"
import Button from "../../components/ui/Button"
import Card from "../../components/ui/Card"
import CreateContentModal from "../../components/ui/CreateContentModal"
import Sidebar from "../../components/ui/Sidebar"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import axios from "axios"

function Dashboard() {
  const [modalOpen,setModalOpen] = useState(false);
  const contents = useContent();

  return (<div>
     <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100">
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
      <div className="flex justify-end gap-2 p-2">
        <Button variant="secondary" size="md" text="Share Brain" onClick={async () => {
          const response = await axios.post(BACKEND_URL + "/api/v1/brain/share",{
            share : true
          },{
            headers: {
              "Authorization": localStorage.getItem("token")
            }
          })
          const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
          alert(shareUrl);  
        }}/>
        <Button variant="primary" size="md" text="Add Content" onClick={() => {setModalOpen(true)}}/>
      </div>
      <div className="flex gap-4 p-2 flex-wrap">
        {contents?.map(({title,link,type}:{title:string;link:string;type:any}) =>  <Card 
         title={title}
         link={link}
         type={type}
         />)}
      </div>
    </div>
    </div>
  )
}

export default Dashboard
