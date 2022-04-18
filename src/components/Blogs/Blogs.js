import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <h2 className='blog-head'>Answer To Question</h2>
            <div className='ans-section'>
                <div className='ans-cart'>
                    <h6>Difference between authorization and authentication</h6>
                    <p> <strong>Authentication</strong> is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.While authentication and authorization are often used interchangeably, they are separate processes used to protect an organization from cyber-attacks. As data breaches continue to escalate in both frequency and scope, authentication and authorization are the first line of defense to prevent confidential data from falling into the wrong hands. As a result, strong authentication and authorization methods should be a critical part of every organization’s overall security strategy.</p>
                </div>
                <div className='ans-cart'>
                    <h6>Why are you using firebase? What other options do you have to implement authentication?</h6>
                    <p><strong>The Firebase</strong> Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Drop-in authentication solution
                        FirebaseUI provides a drop-in auth solution that handles the UI flows for signing in users with email addresses and passwords, phone numbers, and with popular federated identity providers, including Google Sign-In and Facebook Login. </p>
                </div>
                <div className='ans-cart' >
                    <h6>What other services does firebase provide other than authentication?</h6>
                    <p><strong>Firebase </strong> Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication.To use the Firebase Storage we need to authenticate a user via Firebase authentication. Firebase Storage is basically a powerful and simple object storage.Many third-party service providers can help you in growing your business, by either providing specific services like Notifications by Twillio or by providing a vast range of services like AWS, Google Cloud Platform, which includes hosting, storage, authentication and what not.There are many services which Firebase provides, Most useful of them are:

                        1.Cloud Firestore
                        2.Cloud Functions
                        3.Authentication
                        4.Hosting
                        5.Cloud Storage
                        6.Google Analytics
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;