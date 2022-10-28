import React from 'react';
import Brooke_about from "../aboutImages/Brooke_about.jpg"
import Justin_about from "../aboutImages/Justin_about.jpeg"
import Chris_about from "../aboutImages/Chris_about.jpeg"
import Anna_about from "../aboutImages/Anna_about.jpg"

const About = () => {
    return (
        <div className='about'>
            <h1>About</h1>
            <p>
                Welcome to Brewery Tomfoolery: the ultimate brew log for a brewery lover! Spend your days documenting the best of the best brews through the Add a new Brew form(found on our home page). This application is not only a diary for the brewery lover, but also interactive-- you will be able to access entries that have been made by other users as well. Navigate through your brews, your favorite brews, and global brews through the links at the top of the page!
            </p>
            <h2>Application Coding Details</h2>
            <p>
                This application utilizes a React.js frontend and Ruby API built with Sinatra framework for the backend. It is deployed using Netlify and Heroku.
            </p>
            <h2>About the Creators</h2>
            <p>
                Anna Schmidt, Brooke Ross, Chris Ding, and Justin Saborouh are all attending a 15 week, extremely rigorous online program (full time). Though this program comes with its challenges, they have already come to the end of their third phase (of five) at Flatirons School. This program is a culmination of their work as they have spent the past 9 weeks working on how to create the front and back end to web applications.
            </p>
            <h3>Connect with them all on LinkedIn here: </h3>
                
            
            
            {/* Change to using link and not a href!-Brooke */}
            <div className="about-photos">
                <div className= "about-information">
                    <img src={Anna_about} alt="Anna" />
                    <a href="https://www.linkedin.com/in/annaschmidt1697/" target="_blank">Anna <i className="fa-brands fa-linkedin" /></a> 
                    
                </div>
                <div className="about-information"> 
                    <img src= {Brooke_about} alt="Brooke"/>
                    <a href="https://www.linkedin.com/in/brooke-ross-se/" target="_blank" >Brooke <i className="fa-brands fa-linkedin" /></a> 
                    
                </div>           
                <div className="about-information"> 
                    <img src={Chris_about} alt="Chris" />
                    <a href="https://www.linkedin.com/in/christopherding/" target="_blank" >Chris <i className="fa-brands fa-linkedin" /></a>
                     
                </div>
                <div className="about-information">
                    <img src={Justin_about} alt="Justin" /> 
                    <a href="https://www.linkedin.com/in/justinsaborouh/" target="_blank" >Justin <i className="fa-brands fa-linkedin" /></a>
                </div>
            </div>
        </div>

    )
}

export default About