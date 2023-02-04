import Jobs from "./Jobs"
import { useState, useCallback } from "react"
export default function JobsDisplay(){

    // create a variable that stores an array of tech companies
    const techCompanies = [ "Apple", "Google", "Microsoft", "Amazon", "Facebook", "Tesla", "Alphabet", "Oracle", "Intel", "IBM" ];

    const positions = ["Mobile Application Developer", "Cloud Solutions Architect", "Artificial Intelligence Engineer", "Software Engineer", "Data Scientist", "Automation Engineer", "DevOps Engineer", "Full Stack Developer", "Security Analyst", "Product Manager"];

    const specializations = ["Fullstack", "DataViz", "ProdDesign", "CloudInfra", "HCI", "DataWare", "WebDev", "Cybersec", "TechDoc", "AI&ML"];

    const skills = [  ["JavaScript", "Python", "Pokemon", "Django", "RabbitMQ"], ["HTML", "CSS"], ["React", "Redux"], ["Node.js", "Express","JavaScript", "Python", "Pokemon", "Django", "RabbitMQ"], ["Python"], ["Django"], ["SQL"], ["Git", "GitHub"], ["Java"], ["C++"], ["PHP"], ["Laravel"], ["Ruby"], ["Ruby on Rails"], ["C#"], ["ASP.NET"], ["TypeScript"], ["Vue.js"] ];
        
    const salaries = [ "", "S$7,500 - S$10,000", "S$10,500 - S$12,000", "S$12,500 - S$15,000", "S$15,500 - S$18,000", "", "S$21,500 - S$24,000", "S$24,500 - S$27,000", "S$27,500 - S$30,000", "S$30,500 - S$35,000", "S$35,500 - S$40,000", "S$40,500 - S$45,000", "S$45,500 - S$50,000", "", "S$55,500 - S$60,000", "S$60,500 - S$65,000", "S$65,500 - S$70,000" ];

    const locations = ["New York", "San Francisco", "Seattle", "Austin", "Boston", "Chicago", "Atlanta", "Dallas", "Denver", "Houston", "Los Angeles", "Miami", "Minneapolis", "Philadelphia", "Phoenix", "Portland", "Salt Lake City", "San Diego", "San Jose", "Washington, D.C."];

    const hours = [ 2, 4, 6, 8, 10, 12, 14, 16, 20, 22, 24, 26, 28, 30, 32, 34, 36]

    const [selectedCompany, setSelectedCompany] = useState(0);
        
    const handleClick = useCallback((e) =>{
        setSelectedCompany(e);
    }, [])

    // function getRandomBoolean() {
    //     return Math.random() >= 0.5;
    //   }
            

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
                            salary = {salaries[index]}
                            skills = {skills[index]}
                            // availSalary={()=>getRandomBoolean()}
                            />
                )
            })}
            </div>
            
            <div className="jobsDescription floater">
                <div className="disappearOnSmall">{techCompanies[selectedCompany]}</div>
                <div className="disappearOnSmall">{positions[selectedCompany]}</div>
                <div className="disappearOnSmall">{locations[selectedCompany]}</div>

            </div>
        </div>
    )
}
