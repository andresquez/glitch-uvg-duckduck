import './SearchBar.css';

const SearhBar = () => {
    return (
        <div className="SearchBar">
            <img className = "imgDuck" src= "https://duckduckgo.com/assets/logo_homepage.alt.v108.svg" alt="logo" /> 
            <div className="divSearch">
                <input className="barr" type="text" placeholder="Search" />
                <button className='lupa' >    
                    <img className = "imgSearch" src= "https://duckduckgo.com/font/ddg-serp-icons.svg?v=0.48457131068509884#ddg-serp-icons" />
                </button>
            </div>
        </div>
    );
};

export default SearhBar;