import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import TitlePage from './TitlePage';
import AboutMe from './AboutMe'
import Projects from './Projects'
import PhotoGallery from './PhotoGallery'

/**
 * COMPONENT
 */
class Routes extends Component {


  render() {

    return (

      <Switch>
        <Route exact path="/" component={TitlePage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/photo-gallery' component={PhotoGallery} />
      </Switch>

    )
  }
}


export default Routes


