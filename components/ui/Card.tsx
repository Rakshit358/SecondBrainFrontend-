import DeleteIcon from "../../src/assets/deleteIcon";
import ShareIcon from "../../src/assets/shareIcon";

interface CardProps{
    title:string,
    link:string,
    type:"twitter" | "youtube"
}

export default function Card(props:CardProps){
    return <div>
        <div className="border border-slate-100 shadow rounded-3xl max-w-72 p-6 font-inter">
           <div className="flex justify-between">
               <div className="text-md font-semibold">
                  {props.title}
               </div>
               <div className="flex items-center gap-4">
                  <button className="cursor-pointer">
                      <a href={props.link} target="_blank">
                        <ShareIcon />
                      </a>
                  </button>
                  <button className="cursor-pointer">
                      <DeleteIcon />
                  </button>
               </div>
           </div>
           <div>
              {
                  props.type === "youtube" &&
                  <iframe className="w-full rounded-3xl p-2" src={props.link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              }
              {
                 props.type === "twitter" && 
                <blockquote className="twitter-tweet">
                    <a href={props.link.replace("x.com","twitter.com")}></a> 
                </blockquote>
              }
           </div>
        </div>
    </div>;
}