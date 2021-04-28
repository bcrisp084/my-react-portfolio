import React from 'react';
import '../css/style.css';
import image from '../images/Family.jpg';

const About=() => {
    return(
        <main className="container">
        <div className="row">
          <div className="col-md-12">
              <h1 id="header" >About Me</h1>
              <hr />
            </div>
          </div>
      <div className="container1">
        <div className="row">
          <div className="col-md-6">
          <img
              src={image} className='profile' alt='profile'  
            />
             </div>
             <div className="col-md-6 text">
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
              programming field and i am very eager to learn. Please feel free 
              to use the link below to View or download a copy of my resume. 
              Thank you for visiting and i hope you enjoy.
              <br></br>
         
              </p>
              <a
              href="https://docs.google.com/document/d/1GGcZ0exNR5aGWf_GQ2vOHDGYmQHUdiMDLvSzcVS071U/edit"
              download="newfilename"
              className="btn btn-primary resume"
              id="resume"
              ><img src="https://img.icons8.com/color/48/000000/paper.png"/>
              Resume</a
            >
              </div>
            </div>
          </div>
      </main>
    )
};
export default About;