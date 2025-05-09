import { useEffect, useState } from "react";
import Card from "../../components/ui/Card"
import Sidebar from "../../components/ui/Sidebar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";

export default function SharedPage() {
 const [contents,setContents] = useState();
 const {url} = useParams();

  useEffect(() => {
    axios.get(BACKEND_URL + "/api/v1/brain/" + url).then((response) => {setContents(response.data.content)});
  },[]);

  return (<div>
     <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100">
      <div className="flex gap-4 p-2 flex-wrap">
        {contents?.map(({title,link,type}:{title:string;link:string;type:any}) =><Card 
         title={title}
         link={link}
         type={type}
         />)}
      </div>
    </div>
    </div>
  )
}
