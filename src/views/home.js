import React from 'react'
import styled, { keyframes, css } from 'styled-components'

import { flyIn, fadeIn, fadeOut } from '../animations'

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  position: relative;
`

const H1 = styled.h1`
  font-family: 'Righteous', cursive;
  font-size: 15em;
  transition: all 300ms;
  text-align: center;
  transform: skew(-10deg) rotateZ(-10deg);
  overflow: hidden;
  margin-bottom: 0;
  @media only screen and (max-width: 1050px) {
    font-size: 10em;
  }
  @media only screen and (max-width: 667px) {
    font-size: 7.5em;
  }
  @media only screen and (max-width: 425px) {
    font-size: 5em;
  }
`

const TransSpan = styled.span`
  display: block;
  animation: ${flyIn} ${({ time }) => time} ease-in-out,
    ${fadeIn} ${({ time }) => time} ease-in-out;
`

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <H1>
          <TransSpan time="600ms">léon in</TransSpan>
          <TransSpan time="300ms">'t Veld</TransSpan>
        </H1>
      </Wrapper>
    )
  }
}
