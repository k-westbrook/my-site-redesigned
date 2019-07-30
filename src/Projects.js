import React, { Component } from 'react';
import './App.css';
import { ProjectItem } from './ProjectItem'


const projects = [
  {
    name: 'piggybank',
    imageURL: 'https://res.cloudinary.com/dmp2crnzz/image/upload/v1554320022/personal-site/Screen_Shot_2019-04-03_at_12.32.46_PM.png',
    description: "A financial web app that allows visualization of a user's finances and budget creation using Plaid API and Recharts",
    link: 'https://piggy-bank-app.herokuapp.com/'
  },
  {
    name: 'QuikExlpr',
    imageURL: 'https://res.cloudinary.com/dmp2crnzz/image/upload/v1554320023/personal-site/Screen_Shot_2019-04-03_at_12.32.10_PM.png',
    description: 'A web app that finds a user location via IP address and recommends a destination with weather and activity information using third party APIs',
    link: 'https://quikexplr.herokuapp.com/'
  },
  {
    name: 'Me and Mongo',
    imageURL: 'https://res.cloudinary.com/dmp2crnzz/image/upload/v1554320022/personal-site/Screen_Shot_2019-04-03_at_12.31.26_PM.png',
    description: 'A written tutorial that explores how to set up a database with MongoDB and utilize Mongoose ',
    link: 'https://medium.com/@kcheriewestbrook/me-and-mongo-a-exploration-of-mongodb-and-mongoose-7c26a24afa39'
  },
  {
    name: 'West Coast Matching Game',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1564121444/personal-site/west-coast.png",
    description: 'A concentration style game that uses React',
    link: 'https://west-coast-matching-game.herokuapp.com/'
  },
  {
    name: 'Third-Party API: Using OpenWeatherMap to Create a Simple App',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1564122005/personal-site/api_medium.png",
    description: "Exploration of using a third-party api to call and use data for a user's app",
    link: 'https://medium.com/@kcheriewestbrook/third-party-api-using-openweathermap-to-create-a-simple-app-f3d4d9b3b7f1'
  }
  ,
  {
    name: 'react-photo-book-module',
    imageURL: "https://res.cloudinary.com/dmp2crnzz/image/upload/v1564122176/personal-site/npm%20package.png",
    description: 'A node package that generates a React component. The component can pass an array of image URLs as a prop which populates rows of images.',
    link: 'https://www.npmjs.com/package/react-photo-book-module'
  }

]





class Projects extends Component {
  render() {
    return (
      <div className="App">
        <div className="section-container">
          <div className='section-title'>
            <h2 >Projects and Publications</h2>
          </div>
          <div className='projects-box'>
            {projects.map(project => {
              return <ProjectItem project={project} />
            })
            }

          </div>
        </div>

      </div>
    );
  }
}

export default Projects;
