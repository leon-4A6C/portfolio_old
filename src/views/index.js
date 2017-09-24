import React from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'

import Home from './home'
import Projects from './projects'

const Smain = styled.main`margin-top: ${props => props.theme.nav.height};`

export default class Main extends React.Component {
  componentDidMount() {
    console.log('mounted!')
  }

  componentDidUpdate() {
    console.log('updated!')
  }

  waypointEnter = newPath => {
    this.props.history.push(newPath)
  }

  waypointLeave = () => {
    console.log('left')
  }

  render() {
    console.log(this.props.match)
    return (
      <Smain>
        <Waypoint
          onEnter={() => this.waypointEnter('/')}
          onLeave={this.waypointLeave}
        />
        <Home />
        <Waypoint
          onEnter={() => this.waypointEnter('/projects')}
          onLeave={this.waypointLeave}
        />
        <Projects />
        <Waypoint
          onEnter={() => this.waypointEnter('/bla')}
          onLeave={this.waypointLeave}
        />
        <Projects />
      </Smain>
    )
  }
}