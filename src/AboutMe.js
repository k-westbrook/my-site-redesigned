import React, { Component } from 'react';
import './App.css';


class AboutMe extends Component {
  render() {
    return (
      <div className="App">
        <div className="section-header">
          <div className='section-title'>
            <h2 >About Katie</h2>
          </div>
        </div>
        <div className='about-me-box'>

          <div className='description-me-box'>

            <div className='story'>
              <p className='paragraph'>
                <b className='size-emphasis'>My Story:<br /></b> Welcome! My name is Katherine and you may ask, "How did you start in software?" I started dabbling in basic SQL outside of work about a year ago. This led me to various online courses, i.e. building simple mobile apps in Android Studio.</p>
              <p className='paragraph'> I ultimately decided to puruse an in person program. I <b className='inline-emphasis'>completed a 17 week immersive software engingeering program</b> at  <a href='https://www.gracehopper.com/' className='inline-link'>the Grace Hopper Program </a>-Fullstack Academy in New York City (February 2019).
              During this time, I was able to develop my technical skills as well as interpersonal skills on various teams.
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
