import React from 'react'

import Home from './home'
import AboutMe from './aboutMe'
import Projects from './projects'
import Contact from './contact'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    )
  }
}
