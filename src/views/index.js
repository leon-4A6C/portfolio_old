import React from 'react'

import Home from './home'
import AboutMe from './aboutMe'

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <AboutMe />
      </div>
    )
  }
}
