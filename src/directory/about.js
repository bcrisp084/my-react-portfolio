import React from 'react';
import '../css/style.css';
import image from '../images/Family.jpg';

const About=() => {
    return(
      <div>
        <main className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page header">
              <h1 id="header" >About Me</h1>
              <hr />
            </div>
          </div>
        </div>  
      <div className="container">
        <div className="row">
          <div className="col-md-4" id="info1">
            <p>
              Hello and welcome to my profile. My name is Brian Crisp and i would
              like to share a little bit about who i am. Currently i am studying
              to become a full stack web developer at Johns Hopkins. During the
              day i am a automotive state inspector who is also preparing to
              become a father later this year. In the past few months i have
              discovered that i really love learning to become a developer and i
              wish i had discovered that a long time ago but, here i am. I am so
              excited to see the where the road ahead takes me and i couldn't be
              more ready for the journey. I am looking for my first job in the
              programming field and i am very eager to learn. Thank you for
              visiting and i hope you enjoy.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={image} className='profile' alt='profile'
            />
          </div>
          <div className="col-md-4" id="info2">
            <p><b>Skills</b></p>
            <ul>
              <li>Power Point</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>AJAX</li>
              <li>JQUERY</li>
              <li>Node.js</li>
              <li>MYSQL</li>
              <li>Express</li>
              <li>OOP</li>
            </ul>
            <p>
              Fun Fact: I have been learning spanish everyday for the last 130
              days and i love every minute of it.
            </p>
          </div>
        </div>
      </div>
      </main>
      </div>

    )
};
export default About;