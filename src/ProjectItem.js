import React from 'react';
import './App.css';



export const ProjectItem = (props) => {
  const { name, imageURL, description, link } = props.project;
  console.log(link)
  return (
    <div>
      <a href={link}>
        <div className='project-card'>
          <div className='project-info'>
            <h3 className='project-name'>{name}</h3>
            <img src={imageURL} alt='project' className='project-img' />

            <p className='project-description'>{description}</p>


          </div>
        </div>
      </a>
    </div>
  );
}



