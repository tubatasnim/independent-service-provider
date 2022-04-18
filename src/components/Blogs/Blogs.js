import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <h2 className='blog-head'>Answer To Question</h2>
            <div className='ans-section'>
                <div className='ans-cart'>
                    <h6>Difference between authorization and authentication</h6>
                    <p> </p>
                </div>
                <div className='ans-cart'>
                    <h6>Why are you using firebase? What other options do you have to implement authentication?</h6>
                    <p> </p>
                </div>
                <div className='ans-cart' >
                    <h6>What other services does firebase provide other than authentication?</h6>
                    <p> </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;