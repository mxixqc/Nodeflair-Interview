

function LargeOptions(props){
    return(
        <span className={props.className} >
            {props.names.map((name, index) =>{
                return (
                    <a className="option" key={index} href="/">{name}</a>
                )
            })}
        </span>

    )
}

export default LargeOptions;