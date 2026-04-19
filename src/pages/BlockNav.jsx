import { NavLink } from "react-router-dom";

const BlockNav=()=>{

   const navColor={
    textDecoration:"none",
    fontWeight:"bold",
    color:"red"
   }

    return(
        <>

        <nav className="block-navbar">  
            <ul>

                <li className="hover:opacity-90 font-bold"><NavLink to="/"
                style={({isActive})=>isActive?navColor:null}
                >Home</NavLink></li>
                
                <li className="hover:opacity-90 font-bold"><NavLink to="/players"
                style={({isActive})=>isActive?navColor:null} 
                >Players</NavLink></li>
                

                
                <li className="hover:opacity-90 font-bold"><NavLink to="/staff"
                style={({isActive})=>isActive?navColor:null}
                >Staff</NavLink></li>
                

            
                <li className="hover:opacity-90 font-bold"><NavLink to="/matches"
                style={({isActive})=>isActive?navColor:null}
                >Matches</NavLink></li>
            
            </ul>
        </nav>
        </>
    )
}

export default BlockNav;