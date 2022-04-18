import React from 'react';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div>
            <h1 className='check-head'>Check It Out</h1>
            <div className='checkOut-style'>
                <img src="images/check-1.jpg" alt="" />
                <h3>Seven Days Tour </h3>
                <p>For seven days tour you have to pay our prices.Its very good price for all customer.</p>
                <button className='check-button'>Book Now</button>
            </div>
            <div className='checkOut-style'>
                <img src="images/check-2.jpg" alt="" />
                <h3>One Day Tour </h3>
                <p>  For one day tour you have to pay our prices.Its very good price for all customer.</p>
                <button className='check-button'>Book Now</button>
            </div>
            <div className='checkOut-style'>
                <img src="images/check-3.jpg" alt="" />
                <h3> Half Day Tour</h3>
                <p> For half day tour you have to pay our prices.Its very good price for all customer.</p>
                <button className='check-button'>Book Now</button>
            </div>
        </div>
    );
};

export default CheckOut;