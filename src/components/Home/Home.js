import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {

    // const [card, setCard] = useState([]);
    // useEffect(() => {
    //     fetch('load-data.json')
    //         .then(res => res.json())
    //         .then(data => setCard(data));
    // }, [])
    return (
        <div >

            <div className='home-section'>
                <div>
                    <h1 className="head-title">Travel with Us!!!</h1>
                    <p>This is our World Travel center.where we introduce our customer how to travel different place.If your Stateside visit is the only trip you're planning to take this year. If you're managing to get away more than once, then our Annual cover could work out to be a cheaper option.. Depending on how many countries you travel to, and whether you choose to buy any additional cover, costs for Backpacker insurance to the ...</p>
                    <button className='home-button'>Booking Now</button>
                </div>
                <div className='home-img'>
                    < img src="images/travel.webp" alt="" />
                </div>
            </div>
            <h1 className='services-head'>Our Services</h1>
            <div className='card-section mx-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/stay-1.jpg" />
                    <Card.Body>
                        <Card.Title>Seven Days Tour</Card.Title>
                        <Card.Text>
                            For seven days tour you have to pay our prices.Its very good price for all customer.
                        </Card.Text>

                        <Card.Text>
                            price: 8000$
                        </Card.Text>
                        <Button variant="primary">Go CheckOut</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/stay-2.jpg" />
                    <Card.Body>
                        <Card.Title>One Day Tour</Card.Title>
                        <Card.Text>
                            For one day tour you have to pay our prices.Its very good price for all customer.
                        </Card.Text>

                        <Card.Text>
                            price: 3000$
                        </Card.Text>
                        <Button variant="primary">Go CheckOut</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/stay-3.jpg" />
                    <Card.Body>
                        <Card.Title>Half Day Tour</Card.Title>
                        <Card.Text>
                            For half day tour you have to pay our prices.Its very good price for all customer.
                        </Card.Text>

                        <Card.Text>
                            price: 2000$
                        </Card.Text>
                        <Button variant="primary">Go CheckOut</Button>
                    </Card.Body>
                </Card>

            </div>
            <div className='footers'>
                <div className='footer-style'>
                    <div>
                        <h5>Information</h5>
                        <p>About Us</p>
                        <p>Check Out</p>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <h5>Help Link</h5>
                        <p>Services</p>
                        <p>Privacy</p>
                        <p>Supports</p>
                    </div>
                    <div>
                        <h5>Our Service</h5>
                        <p>Check Out</p>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <h5>Contact Us</h5>
                        <p>tasnimtuba22@gmail.com</p>
                        <p>01774920534</p>
                    </div>
                </div>
                <h5 className='footer-title'> © 2022 World Travel Group.</h5>
            </div>

        </div>
    );
};

export default Home;