import { NavLink, Outlet } from "react-router-dom";
import FirstNav from "./FirstNav";
import BlockNav from "./BlockNav";
import { useState } from "react";

const FirstLayout=()=>{
    const [show,setShow]=useState(false);
    

    const showThis=()=>{
        setShow(!show);
    }

  
    return(
        <>
        <div className="main-layout">
           <div>
           <h2>Afghanistan Cricket Board <span className="bat-picture">🏏</span></h2> 
           </div>

           <div>
            <FirstNav />
           </div>
            <div className="login-btn">
                <button className="log">
                <NavLink to="/" className="login">LOGIN</NavLink>
                </button>
            </div>
            <button className="cross-btn" onClick={showThis}>{show?"❌":"▪▪▪"}</button>
        </div>
              <div className="bg-stone-900 text-right pr-6 w-32 z-50">
                {show?<BlockNav />:null}
              </div>
            <Outlet />

             
        </>
    )
}

export default FirstLayout;