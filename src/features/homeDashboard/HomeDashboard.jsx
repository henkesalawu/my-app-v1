import React from "react";
import './HomeDashboard.css';
import {Icon} from "semantic-ui-react";
import { Link } from "react-router-dom";

function HomeDashboard() {

    const activatePanel =() => {
        const panels = document.querySelectorAll('.panel');
        
        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        })
    })
    
    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        })
    }
    
        }
    return (
    
       <div className="diy_projects">
        <div className="diy_container">
        <div 
        className="panel active" 
        style={{backgroundImage: "url(/assets/images/about.jpg)"}} 
        onClick={activatePanel}
        >
        <Link to='/about'><h3 style={{color: 'black'}}>
        About me
        <p><Icon color='black' name='arrow alternate circle right outline' /></p>
        </h3>
        </Link>
        </div>
        <div 
        className="panel" 
        style={{backgroundImage: "url(/assets/images/work.jpg)"}}
        >
        <Link to='/projects'>
        <h3 style={{color: 'black'}}>
        Projects
        <p><Icon color='black' name='arrow alternate circle right outline' /></p>
        </h3>
        </Link>   
        </div>
        <div 
        className="panel" 
        style={{backgroundImage: "url(/assets/images/diy.jpg)"}}
        >
        <Link to='/diy'>
        <h3 style={{color: 'white'}}>
        DIY
        <p><Icon name='arrow alternate circle right outline' /></p>
        </h3>  
        </Link>
        </div>
        <div 
        className="panel" 
        style={{backgroundImage: "url(/assets/images/music.jpg)"}}
        >
        <Link to='/hobby'>
        <h3 style={{color: 'white'}}>
        Hobby
        <p><Icon name='arrow alternate circle right outline' /></p>
        </h3>
        </Link>  
        </div>
        </div>
        </div>
        
        )
}

export default HomeDashboard;