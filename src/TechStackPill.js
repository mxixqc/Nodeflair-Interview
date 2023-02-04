export default function TechStackPill(props){
    return (
        <span>
            <span className="techStackPill" style={{display: "inline-block"}}>
                {props.isBlack 
                ? 
                // Render this if true
                <span style={{fontFamily: "Arial", fontWeight: "normal", color: "black"}}>
                    {props.tech}
                </span> 
                
                :
                // Else this
                <span >{props.tech}</span>}
            </span>
            &nbsp;
        </span>
    )
}