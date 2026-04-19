import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const AllLayout=()=>{
    const { id }=useParams();
    const [singlePlayer,setsinglePlayer]=useState([]);

useEffect(()=>{
 fetch('/assest/data.json').then(res=>res.json()).then((data)=>{
        const player=data.find(item=>item.id===Number(id));
        setsinglePlayer(player?[player]:[])
    })
},[id])
   


  const playerEle=singlePlayer.map(item=>(
    <div key={item.id} >
      <div className="picture sm:flex justify-evenly my-5">
    <img src={item.img} className="img-layout sm:h-96 rounded-md max-lg:w-96 h-80 ml-3 my-3" alt="picture" />
    <img src={item.imge} className="img-layout sm:h-96 rounded-md max-lg:w-96 ml-3 h-80" alt="picture"/>
    </div>

    <h2 className="text-center font-bold">{item.name}</h2>
    <h2 className="text-center text-orange-600 font-extrabold text-lg">{item.shortDes}</h2>
    <h2 className="font-bold px-5 ">{item.Description}</h2>
    </div>
  ))
    return(
        <>
        <Link to="/players" className="font-bold text-lg pl-5 pt-5"><span className="font-bold text-lg">⏪</span>Back to main page</Link>
        {
            playerEle
        }
         
        </>
    )
}

export default AllLayout;