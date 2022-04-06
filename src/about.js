import React from "react"
import './about.css'
const About = () =>{
    let [aboutClass, setAboutClass] = React.useState('about');
    let [images, setImages] = React.useState([
        "./images/desktop/image-transform.jpg",
        "./images/desktop/image-stand-out.jpg",
        "./images/desktop/image-graphic-design.jpg",
        "./images/desktop/image-photography.jpg"
    ])
    console.log(images[0])
    React.useEffect(()=>{
            // const ResizeWindow = () =>{
            //     if(window.innerWidth>=600){
            //         setAboutClass('about')
            //     }
            //     else{
            //         setAboutClass('aboutAlt')
            //     }
            // }
            window.addEventListener('resize', () =>{
                if(window.innerWidth>=600){
                    setImages(preValue =>{
                        return [
                            "./images/desktop/image-transform.jpg",
                            "./images/desktop/image-stand-out.jpg",
                            "./images/desktop/image-graphic-design.jpg",
                            "./images/desktop/image-photography.jpg"
                        ]
                    })
                    setAboutClass('about');

                }
                else{
                    setImages(preValue =>{
                        return [
                            "./images/mobile/image-transform.jpg",
                            "./images/mobile/image-stand-out.jpg",
                            "./images/mobile/image-graphic-design.jpg",
                            "./images/mobile/image-photography.jpg"
                        ]
                    })
                    setAboutClass('aboutAlt')
                }
            });
            
        }
    ,[])
    return (
        <section className = {aboutClass}>
            <div className = "aboutCard">
                <h1>Transform your brand</h1>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <a href = "#">Learn more</a>
            </div>
            <div className = "aboutImage">
                <img src = {images[0]} alt = "image-transform"/>
            </div>
            <div className = "aboutImage">
                <img src = {images[1]} alt = "image-stand-out" />
            </div>
            <div className = "aboutCard learn_more">
                <h1>Stand out to the right audience</h1>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <a href = "#">Learn more</a>
            </div>
            <div className = "aboutImage">
                <img src = {images[2]} alt = "image-graphic-design" />
                <div className="aboutImage__text" id = "graphic_design">
                    <h2>Graphic design</h2>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
                
            </div>
            <div className = "aboutImage">
                <img src = {images[3]} alt = "image-photography" />
                <div className="aboutImage__text" id = "photography">
                    <h2>Photography</h2>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </section>
    )
}
export default About;