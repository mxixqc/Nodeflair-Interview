import logo from "./assets/nodeflairLogo.svg"
import LargeOptions from "./LargeOptions"
import { useState } from "react";
function Header(){
    
    return(
        <div className="header">
            <div className="header-container">

                    <span className="navbar-icon">
                        <a href="/">
                            <img alt="nodeflair logo" src={logo}></img>
                        </a>
                    </span>
                    <LargeOptions className={`show-when-big`} names={["Companies", "Jobs", "Salaries", "Reviews", "Blog"]} />
                    <LargeOptions className={`show-when-big floatRight `} names={["Sign In"]} />
            
                    <span className={`hamburger-icon floatRight`}>
                        &#9776;
                    </span>

            </div>
            
        </div>
    );
}

export default Header;