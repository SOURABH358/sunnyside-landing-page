import React from "react"
import Client from "./client.js"
import './testimonials.css'
const Testimonial = () =>{
    let [testimonialsClass,setTestimonialsClass] = React.useState('testimonials');
    React.useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(window.innerWidth<600){
                setTestimonialsClass('testimonialsAlt')
            }
            else{
                setTestimonialsClass('testimonials')
            }
        })
    },[])
    return (
        <section className = {testimonialsClass}>
            <h1>Client testimonials</h1>
            <div className = "client_testimonial">
                <div className="testimonials__card">
                    <div className="user_image">
                        <img src = {Client[0].img} alt = "user" />
                    </div>
                    <p className = "review">{Client[0].review}</p>
                    <p className="name">{Client[0].name}</p>
                    <p className="job">{Client[0].job}</p>
                </div>
                <div className="testimonials__card">
                    <div className="user_image">
                        <img src = {Client[1].img} alt = "user" />
                    </div>
                    <p className = "review">{Client[1].review}</p>
                    <p className="name">{Client[1].name}</p>
                    <p className="job">{Client[2].job}</p>
                </div>
                <div className="testimonials__card">
                    <div className="user_image">
                        <img src = {Client[2].img} alt = "user" />
                    </div>
                    <p className = "review">{Client[2].review}</p>
                    <p className="name">{Client[2].name}</p>
                    <p className="job">{Client[2].job}</p>
                </div>
            </div>
        </section>
    )
}
export default Testimonial;