import Jobs from "./Jobs"
import { useState, useCallback } from "react"
export default function JobsDisplay(){

    // create a variable that stores an array of tech companies
    const techCompanies = [
        "Apple",
        "Google",
        "Microsoft",
        "Amazon",
        "Facebook",
        "Tesla",
        "Alphabet",
        "Oracle",
        "Intel",
        "IBM",
        "HP",
        "Dell",
        "Cisco Systems",
        "Tesla",
        "Nvidia",
        "Adobe",
        "VMware",
        "HPE"
      ];

    const positions = ["Mobile Application Developer", "Cloud Solutions Architect", "Artificial Intelligence Engineer", "Software Engineer", "Data Scientist", "Automation Engineer", "DevOps Engineer", "Full Stack Developer", "Security Analyst", "Product Manager"];

    const specializations = [
        "Full Stack Development",
        "Data Analysis and Visualization",
        "Product Design and Development",
        "Cloud Infrastructure and Automation",
        "Human-Computer Interaction",
        "Data Warehousing and Management",
        "Web Application Development",
        "Cybersecurity and Compliance",
        "Technical Documentation and Communication",
        "Artificial Intelligence and Machine Learning"
        ];
        
    const locations = ["New York", "San Francisco", "Seattle", "Austin", "Boston", "Chicago", "Atlanta", "Dallas", "Denver", "Houston", "Los Angeles", "Miami", "Minneapolis", "Philadelphia", "Phoenix", "Portland", "Salt Lake City", "San Diego", "San Jose", "Washington, D.C."];

    const hours = [ 2, 4, 6, 8, 10, 12, 14, 16, 20, 22, 24, 26, 28, 30, 32, 34, 36]

    const [selectedCompany, setSelectedCompany] = useState();
        
    const handleClick = useCallback((e) =>{
        setSelectedCompany(e);
        console.log(e)
    }, [])

    return(
        <div className="jobsDisplay">
            <div className="jobsListings">
            {techCompanies.map((company, index) =>{
                return(
                    
                        <Jobs 
                            company={company} 
                            position={positions[index]}  
                            specialization={specializations[index]}
                            location={locations[index]}
                            hours={hours[index]}
                            key={index}
                            id={index}
                            currSelected={selectedCompany}
                            handleClick={(index)=>handleClick(index)}
                            />
                )
            })}
            </div>
            
            <div className="jobsDescription scrollable">
.
            </div>
        </div>
    )
}
