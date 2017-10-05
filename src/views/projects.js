import React from 'react'
import styled from 'styled-components'

import { Wrapper, GoDown } from '../components'

const H2 = styled.h2`text-align: center;`

class Projects extends React.Component {
  render() {
    return (
      <Wrapper id="projects">
        <GoDown top to="aboutMe" />
        <H2>some of my awesome projects</H2>
      </Wrapper>
    )
  }
}

export default Projects
