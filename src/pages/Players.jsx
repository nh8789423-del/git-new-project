import { useState } from "react";
import { Link } from "react-router-dom";

const Players=()=>{
    const [playe,setPlaye]=useState([]);

    fetch("/assest/data.json")
    .then(res=>res.json())
    .then(data=>setPlaye(data))

    
    return(
        <>
        
          <div className="cardss">
            {playe.map((item)=>{
              return<div className="cardo" key={item.id}>
              <img src={item.img} className="img-field" alt="picture" />
              <h2 className="text-center">{item.name}</h2>
              <h2 className="text-center text-orange-600">{item.shortDes}</h2>
              <Link to={`/players/${item.id}`}>
              <button className="w-32 h-10 bg-teal-950 rounded-sm text-white mt-5 ml-16">VIEW DETAILS</button>
              </Link>
             </div>
            })}
            </div>
           
        </>
    )
}
export default Players;