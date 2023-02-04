import duck from "./assets/duck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import TechStackPill from "./TechStackPill";

export default function Jobs(props){
      
    return(
        <div className={`jobEntry ${props.currSelected === props.id ? "jobEntryClicked": ""}`}  onClick={()=>{
            props.handleClick(props.id)
        }} id={props.id}>
            <div className="jobMainInfo">
                <div className="jobTitle">
                    <div>
                        <img className="jobImage" src={duck} alt="company here"/>
                    </div>
                    <div className="jobCompany">
                        <p style={{margin: "0px"}}>
                            <span>{props.company}</span>
                            <span>  &nbsp; 4&nbsp;★</span>
                        </p>
                        <h2 style={{fontSize: "16px", marginTop: "4px"}}>
                            {props.position}
                        </h2>
                    </div>
                    <div className="jobSpecializationContainer">
                        <div className="jobSpecialization">
                            {props.specialization}
                        </div>
                    </div>
                    
                </div>
                
                <div className="jobListingDetails"> 
                    <div className="jobRecencyInformation">
                        <span style={{color: "#1fc76a", fontWeight:"bold"}}>
                            about {props.hours} hours ago
                            &nbsp;
                        </span>
                        <span>
                        <FontAwesomeIcon icon={faLocationDot} color="#838383" width="10.5" height="14" />
                        &nbsp;{props.location}
                        </span>
                    </div>  
                    <div className={ props.salary === "" ? "noDisplay" : ""}>
                        <p className={`jobSalary`}>
                            
                            {props.salary} / mth &nbsp;
                        
                            <TechStackPill tech="EST" isBlack={true}/>

                        </p>

                    </div>
                </div>
            </div>
            <div className="techStackPillContainer">
                {
                    props.skills.map((tech, index) => {
                        return (
                            <TechStackPill tech={tech} key={index}/>
                        )
                    })
                }



            </div>
        </div>
    )
}