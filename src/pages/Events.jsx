import data from "./index.json"


export default function Events() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
            <p style={{fontSize:"25px",fontFamily:"monospace"}} className="section--title">Home (17,Sushila Sadan ,Dadwada Kota jn)</p>
                <h2 className="skills--section--heading">Events</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} style={{width:"250px"}}  alt="Product Chain" />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <p style={{fontWeight:"bold", fontSize:"18px"}} className="skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
