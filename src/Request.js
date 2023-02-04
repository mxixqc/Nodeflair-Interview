export default function Request(){

    function disappear(e){
        e.target.parentNode.style.display = "none"
    }

    return(
        <div className="header request" style={{justifyContent: "space-between"}}>
            <div></div>
            <span>👋 Help us complete a survey on career transparency <a className="nostyle" rel="noreferrer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfQeuoPJNeKfG8QITqU-utAckP1YmoZpkDrDKm44d_n06ePmw/viewform">🙏 Take survey!</a></span>
            

            <div onClick={(e)=>disappear(e)} class="close" style={{alignSelf: "auto", paddingRight: "50px"}}>&times;</div>
        </div>
    )
}