import React from "react"
import './slides.css'
const Slides = () =>{
    let [slidesClass, setSlidesClass] = React.useState('slides')
    let [slidesImages, setSlidesImages] = React.useState([
        "./images/desktop/image-gallery-milkbottles.jpg",
        "./images/desktop/image-gallery-orange.jpg",
        "./images/desktop/image-gallery-cone.jpg",
        "./images/desktop/image-gallery-sugarcubes.jpg"
    ])
    React.useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(window.innerWidth<600){
                setSlidesClass('slidesAlt')
                setSlidesImages([
                    "./images/mobile/image-gallery-milkbottles.jpg",
                    "./images/mobile/image-gallery-orange.jpg",
                    "./images/mobile/image-gallery-cone.jpg",
                    "./images/mobile/image-gallery-sugar-cubes.jpg"
                ])
            }
            else{
                setSlidesClass('slides')
                setSlidesImages([
                    "./images/desktop/image-gallery-milkbottles.jpg",
                    "./images/desktop/image-gallery-orange.jpg",
                    "./images/desktop/image-gallery-cone.jpg",
                    "./images/desktop/image-gallery-sugarcubes.jpg"
                ])
            }
        })
    },[])
    return (
        <section className={slidesClass}>
            <div><img src = {slidesImages[0]} alt = "image-gallery"/></div>
            <div><img src = {slidesImages[1]} alt = "image-gallery"/></div>
            <div><img src = {slidesImages[2]} alt = "image-gallery"/></div>
            <div><img src = {slidesImages[3]} alt = "image-gallery"/></div>

        </section>
    )
}
export default Slides;