import photo from "./hearttt.png"
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title" style={{fontSize:"25px"}}>
                        Om Prakash Chaturvedi Family 
                        <br/> invites  
                        <br/> you all to enjoy the precious wedding of
                    </p>
                    
                    <h1 className="hero--section--title">
                        <span style={{fontFamily:"monospace"}} className="hero--section-title--color">Purva </span>{" "}
                        <br /> &
                        <span style={{fontFamily:"monospace"}}> <br/>Shikhar</span>
                    </h1>
                    <p style={{fontFamily:"cursive", fontSize:"27px"}} className="hero--section-description">
                        We are extremely happy to announce the wedding of our daughter Purva with Shikhar.
                        <br /> 26-27th November 2024
                    </p>
                </div>
                
                
                
            </div>
            <div className="hero--section--img">
                <img src={photo} style={{borderRadius:"50%", fontSize:"20px"}} alt="Hero Section" />
            </div>
        </section>
    )
}
