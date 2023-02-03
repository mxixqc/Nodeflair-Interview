export default function TechStackPill(props){
    return (
        
        <span className="techStackPill" style={{display: "inline-block"}}>
            {props.isBlack ? <span style={{fontFamily: "Arial", fontWeight: "normal", color: "black"}}>{props.tech}</span> : <span >{props.tech}</span>}
            
        </span>
    )
}