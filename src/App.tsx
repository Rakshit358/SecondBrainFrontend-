import { useState } from "react"
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"
import CreateContentModal from "../components/ui/CreateContentModal"
import Sidebar from "../components/ui/Sidebar"

function App() {
  const [modalOpen,setModalOpen] = useState(false);
  
  return (<div>
     <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100">
      <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
      <div className="flex justify-end gap-2 p-2">
        <Button variant="secondary" size="md" text="Share Brain" onClick={() => {console.log("Clicked")}}/>
        <Button variant="primary" size="md" text="Add Content" onClick={() => {setModalOpen(true)}}/>
      </div>
      <div className="flex gap-4 p-2">
        <Card title="My First Tweet" link="https://x.com/gharkekalesh/status/1918726390700200383" type="twitter"/>
        <Card title="My First Tweet" link="https://www.youtube.com/watch?v=aSc4vIZOakk" type="youtube"/>
      </div>
    </div>
    </div>
  )
}

export default App
