import React from 'react';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div>
            <h1 className='about-head'>My Identity</h1>
            <img className='pic-style' src="images/my-pic.jpg" alt="" />
            <h4 className='about-name'>Tasnim Tuba</h4>
            <p className='about-details'><strong>Aslamualaikum..</strong>
                This is tasnim tuba. The goal for the next five months of my life is to complete the web development course totally. Then i will go to SCIC. Then after finishing the diploma I will go for internship and with that I will do skill development. I will try for the job at the end of the diploma.</p>
        </div>
    );
};

export default AboutMe;