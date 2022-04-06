import React from "react"
import './main.css'
const Main = () => {
    let [barClass, setBarClass] = React.useState('bars')
    let [tabClass, setTabClass] = React.useState('navs')
    
    React.useEffect(()=>{
        // const ResizeWindow = ()=>{
        //     if(window.innerWidth<600){
        //         setBarClass('bars show-bars')
        //         setTabClass('tabs')
        //     }
        //     else{
        //         setBarClass('bars')
        //         setTabClass('navs')
        //     }
        // }
        window.addEventListener('resize',()=>{
            if(window.innerWidth<600){
                setBarClass('bars show-bars')
                setTabClass('tabs')
            }
            else{
                setBarClass('bars')
                setTabClass('navs')
            }
        });
    },[])
    function toggleTabs(){
        if(tabClass==='tabs'){
            setTabClass('tabs show-tabs')
        }
        else{
            setTabClass('tabs')
        }
    }
    return (
        <main className="main-section">
            <nav className = "navbar">
                <div>
                    <img className = "logo" src="./images/logo.svg" alt = "logo" />

                </div>
                <ul className = {tabClass}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <img 
                className = {barClass} 
                src = "./images/icon-hamburger.svg" alt = "icon-hamburger"
                onClick={toggleTabs} 
                />
            </nav>
            <h1 className="main-heading">We are creatives</h1>
            <div className = "arrow-icon">
                <img 
                src="./images/icon-arrow-down.svg" 
                alt = "icon-arrow-down"
                />
            </div>
        </main>
    )
}
export default Main;