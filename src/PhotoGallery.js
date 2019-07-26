import React, { Component } from 'react';
import './App.css';


class PhotoGallery extends Component {
  render() {
    return (
      <div className="App">
        <div className="section-header">
          <div className='section-title'>
            <h2 >Photo Gallery</h2>
          </div>
          <div className='images-box'>

            <img className='gallery-pic'
              src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554337799/personal-site/photo%20gallery/IMG_6544.jpg' alt='travel' />

            <img className='gallery-pic'
              src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554337800/personal-site/photo%20gallery/IMG_6599.jpg' alt='travel' />

            <img className='gallery-pic'
              src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554337798/personal-site/photo%20gallery/IMG_6448.jpg' alt='travel' />

            <img className='gallery-pic'
              src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554337798/personal-site/photo%20gallery/IMG_4963.jpg' alt='travel' />

            <img className='gallery-pic'
              src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554337798/personal-site/photo%20gallery/IMG_4160.jpg' alt='travel' />

            <img className='gallery-pic'
              src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554337798/personal-site/photo%20gallery/IMG_6332.jpg' alt='travel' />

            <img className='gallery-pic'
              src='https://res.cloudinary.com/dmp2crnzz/image/upload/v1554337798/personal-site/photo%20gallery/IMG_4406.jpg' alt='travel' />

          </div>


        </div>


      </div >
    );
  }
}

export default PhotoGallery;
