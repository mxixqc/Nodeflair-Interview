import duck from "./assets/duck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Jobs(){
    return(
        <div className="jobEntry">
            <div className="jobMainInfo">
                <div className="jobTitle">
                    <div>
                        <img className="jobImage" src={duck} alt="company here"/>
                    </div>
                    <div className="jobCompany">
                        <p style={{margin: "0px"}}>
                            <span>Visa</span>
                            <span>  &nbsp; 4&nbsp;★</span>
                        </p>
                        <h2 style={{fontSize: "16px", marginTop: "4px"}}>
                            CyberSecurity Analyst
                        </h2>
                    </div>
                    <div className="jobSpecializationContainer">
                        <div className="jobSpecialization">
                            CyberSec Ops
                        </div>
                    </div>
                    
                </div>
                
                <div className="jobTimeLocation"> 
                    <div className="jobRecencyInformation">
                        <span style={{color: "#1fc76a", fontWeight:"bold"}}>
                            about 1 hour ago
                            &nbsp;
                        </span>
                        <span>
                        <FontAwesomeIcon icon={faLocationDot} color="#838383" width="10.5" height="14" />
                        &nbsp;Singapore
                        </span>
                    </div>  
                </div>
            </div>
            <div>
                Hello
            </div>
        </div>
    )
}