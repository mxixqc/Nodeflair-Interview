import duck from "./assets/duck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import TechStackPill from "./TechStackPill";

export default function Jobs(props){

    function generateSalaryRange() {
        const firstNum = Math.floor(Math.random() * 100000 + 10000);
        const secondNum = Math.floor(Math.random() * (firstNum - 10000) + 10000);
        return `S$${secondNum.toLocaleString()} - S$${firstNum.toLocaleString()}`;
      }
      


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
                            about 1 hour ago
                            &nbsp;
                        </span>
                        <span>
                        <FontAwesomeIcon icon={faLocationDot} color="#838383" width="10.5" height="14" />
                        &nbsp;Singapore
                        </span>
                    </div>  
                    <div className={ props.availSalary ? "" : "noDisplay"}>
                        <p className={`jobSalary`}>
                            
                            {generateSalaryRange()} / mth &nbsp;
                        
                            <TechStackPill tech="EST" isBlack={true}/>

                        </p>

                    </div>
                </div>
            </div>
            <div className="techStackPillContainer">
                <TechStackPill tech="Python"/>
                &nbsp;
                <TechStackPill tech="Python"/>
                &nbsp;

                <TechStackPill tech="Python"/>
                &nbsp;

                <TechStackPill tech="Python"/>
                &nbsp;

                <TechStackPill tech="Python"/>
                &nbsp;
                <TechStackPill tech="Python"/>
                &nbsp;

                <TechStackPill tech="Python"/>
                &nbsp;



            </div>
        </div>
    )
}