import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div className='home-section'>

            <div>
                <h1>Travel with Us!!!</h1>
                <p>This is our World Travel center.where we introduce our customer how to travel different place.</p>
                <button>Booking Now</button>
            </div>
            <div>
                < img src="images/travel.webp" alt="" />
            </div>
        </div>
    );
};

export default Home;