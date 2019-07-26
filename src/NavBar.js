import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Link to='/'>
            <div className='nav-link-box'>
              <h4>Home</h4>
            </div>
          </Link>
          <Link to='/projects'>
            <div className='nav-link-box'>
              <h4>Projects</h4>
            </div>
          </Link>
          <Link to='/aboutme'>
            <div className='nav-link-box'>
              <h4>About Me</h4>
            </div>
          </Link>
          <Link to='/photo-gallery'>
            <div className='nav-link-box'>
              <h4>Photo Gallery</h4>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
