import React from 'react'
import styled, { css } from 'styled-components'
import Waypoint from 'react-waypoint'
import { scroller } from 'react-scroll'

import { Wrapper, GoDown } from '../components'
import { fadeIn, flyInRev } from '../animations'

const H2 = styled.h2`
  text-align: center;
  font-size: 7.5em;
  overflow: hidden;
  opacity: 0;
  @media only screen and (max-width: 768px) {
    margin-bottom: 0.1em;
  }
  ${({ inView }) =>
    inView &&
    css`
      opacity: 1;
      animation: ${flyInRev} 600ms 300ms ease-in-out,
        ${fadeIn} 600ms 300ms ease-in-out;
    `};
`

const P = styled.p`
  font-size: 3em;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 0.5em;
  transition: all 600ms;
  opacity: 0;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (max-width: 500px) {
    font-size: 2em;
  }
  ${({ inView }) =>
    inView &&
    css`
      animation: ${fadeIn} 600ms 300ms ease-in-out;
      opacity: 1;
    `};
`

export default class AboutMe extends React.Component {
  state = {
    inView: false,
  }
  render() {
    return (
      <Wrapper id="aboutMeStart">
        <GoDown
          top
          onClick={() => scroller.scrollTo('home', { smooth: true })}
        />
        <Waypoint
          onEnter={() => this.setState({ inView: true })}
          onLeave={() => this.setState({ inView: false })}
        />
        <H2 {...this.state}>Hi</H2>
        <P {...this.state}>
          I am Léon in 't Veld. I'm a student at ROCMN and I create stuff.
        </P>
      </Wrapper>
    )
  }
}
