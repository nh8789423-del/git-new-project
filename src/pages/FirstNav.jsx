import { NavLink } from "react-router-dom";
const FirstNav=()=>{
    const navColor={
        fontWeight:"bold",
        color:"red",
        textDecoration:"underline",
        textDecorationColor:"white",
        textDecorationThickness:"3px",
        textDecorationOffset:"10px",
        textUnderlineOffset:"15px"
    }
    
    return(
        <>
        <nav className="main-navbar">
            <ul>
                <li><NavLink to="/"
                style={({isActive})=>isActive?navColor:null}
                >Home</NavLink></li>

                <li><NavLink to="/players"
                style={({isActive})=>isActive?navColor:null} 
                >Players</NavLink></li>

                <li><NavLink to="/staff"
                style={({isActive})=>isActive?navColor:null}
                >Staff</NavLink></li>

                <li><NavLink to="/matches"
                style={({isActive})=>isActive?navColor:null}
                >Matches</NavLink></li>
            </ul>
        </nav>
        </>
    )
}

export default FirstNav;