import duck from './assets/duck.svg';
export default function GreenBack(){
    return (
        <div className="greenBack"> 
            <div className="grid">
                <div className="gridLeft">
                    <h1 className="landingHeroHeader">
                        <span className="colorSecondary fontMonospace">
                        code()
                        </span>
                        at where you love
                    </h1>
                    <p className="landingHeroSubHeader">
                        Explore, Research, Secure and Grow your career
                    </p>
                    <div className="searchBarContainer">
                        <form className="formContainer">
                            <input className="searchBar" placeholder='Search Jobs, Companies, more...'>



                            </input>

                        </form>
                    </div>
                </div>

                <div>
                    <img src={duck} alt="duck here"></img>
                </div>
            </div>
        </div>
    )
}
