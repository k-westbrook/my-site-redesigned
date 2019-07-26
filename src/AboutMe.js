import React, { Component } from 'react';
import './App.css';


class AboutMe extends Component {
  render() {
    return (
      <div className="App">
        <div className="section-container">
          <div className='section-title'>
            <h2 >About Katie</h2>
          </div>
        </div>
        <div className='about-me-box'>

          <div className='description-me-box'>

            <div className='story'>
              <p className='paragraph'>
                <b className='size-emphasis'>Start Here:<br /></b> Motivated software engineer who's non traditional background has pushed me to learn and grow continuously. I enjoy a technical challenge and can successfully communicate and collaborate with colleagues on my team. I was able to learn Fullstack JavaScript including NodeJS/Express, PostgreSQL, React/Redux, Sequelize in only a few months with the immersive Grace Hopper Program at Fullstack Academy in New York City. This boot camp is highly selective and requires a coding challenge as well as technical interview to be considered for admission.

Currently, I'm participating in the Microsoft LEAP program which is a software engineering apprenticeship. I have been working mainly with databases and the back-end realm of software during my internship. I have not only researched the technology that my team uses but have implemented solutions that are being used! Even though I am focusing heavily on data engineering in this role, I still like to actively work on side projects that have front end components as well. I am not only willing but eager to learn new technologies and provide value to any tech team!

Please contact me with any software engineering or developer advocate opportunities to share my potential and grow on a collaborative team!
            </p>
            </div>
            <div className='story'>
              <p className='paragraph'>
                <b className='size-emphasis'>Technical Skills and Knowledge:</b>
                <br /><b>JavaScript--  React--Redux--NodeJS</b>--PostreSQL--MongoDB<br />ORMS such as Sequelize and Mongoose-- Third Party APIs --Recharts
                </p>
              <p className='paragraph'>
                Take a look at <a className='inline-link' href='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554335913/personal-site/Katherine_Westbrook.pdf' alt='resume'>my CV/Resume right now </a>for more details on my professional background.


                <br /> Please <a href='mailto:kcheriewestbrook@gmail.com' className='inline-link'> click here to email me</a> if you have any questions and suggestions.
            </p>
              <p className='paragraph'>
                <b className='size-emphasis'>Contact me</b>
                <br />
                <br /> Please <a href='mailto:kcheriewestbrook@gmail.com' className='inline-link'> click here to email me</a> if you have any questions and suggestions.
            </p>
            </div>
            <div>
              <img className='about-me-picture' src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554309949/personal-site/profile_pic.jpg' alt='myself' />
            </div>

          </div>
        </div>
      </div >
    );
  }
}

export default AboutMe;
