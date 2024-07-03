import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/customHooks/useOnlineStatus";

const Header = ( ) => {
    const [btnName,setBtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();
    //if no dependency array useEffect called every render
    //if dependency array is empty useEffect called on initialrender just once
    //if something is in dependency array useEffect called/render when something update in dependency array

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"  src={LOGO_URL}/>
                </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {OnlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li> 
                       <Link to="/" > Home </Link>  
                    </li>
                    <li> 
                       <Link to="/grocery" > Grocery </Link>  
                    </li>
                    <li> 
                    <Link to="/about" > About </Link>      
                    </li>
                    <li>
                    <Link to="/contact" > Contact </Link>  
                    </li>
                    <li> Cart </li>
                    <button className="login" onClick={()=>{btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName} </button>
                </ul>
            </div>

        </div>
    )
}

export default Header;