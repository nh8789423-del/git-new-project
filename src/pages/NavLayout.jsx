import { NavLink } from "react-router-dom";

const NavLayout=()=>{
    return(
        <>
        <ul>
        <li><NavLink to="/t20">T20</NavLink></li> 
        <li><NavLink to="/odi">ODI</NavLink></li>
        <li><NavLink to="/test">TEST</NavLink></li>  
        </ul>
      
        </>
    )
}

export default NavLayout;