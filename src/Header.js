import logo from "./assets/nodeflairLogo.svg"
import LargeOptions from "./LargeOptions"
import { useState } from "react";
function Header(){
    
    return(
        <div className="header">
            <div className="headerContainer">

                    <span className="navbarIcon">
                        <a href="/">
                            <img alt="nodeflair logo" src={logo}></img>
                        </a>
                    </span>
                    <LargeOptions className="showWhenBig" names={["Companies", "Jobs", "Salaries", "Reviews", "Blog"]} />
                    <LargeOptions className="showWhenBig floatRight" names={["Sign In"]} />
            
                    <span className={`hamburgerIcon floatRight`}>
                        &#9776;
                    </span>

            </div>
            
        </div>
    );
}

export default Header;