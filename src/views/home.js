import React from 'react'
import styled, { keyframes } from 'styled-components'
import { scroller } from 'react-scroll'

import { Wrapper, GoDown } from '../components'
import { flyIn, fadeIn, floatY } from '../animations'

const H1 = styled.h1`
  font-family: 'Righteous', cursive;
  font-size: 15em;
  transition: all 300ms;
  text-align: center;
  transform: skew(-10deg) rotateZ(-10deg);
  overflow: hidden;
  margin-bottom: 0.3em;
  position: relative;
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
  animation: ${flyIn} ${({ time }) => time || '300ms'} ease-in-out,
    ${fadeIn} ${({ time }) => time || '300ms'} ease-in-out;
`

const H4 = styled.h4`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};
  animation: ${fadeIn} ${({ timeFade }) => timeFade || '300ms'} ease-in-out,
    ${floatY} ${({ timeFloat }) => timeFloat || '1s'} ease-in-out alternate
      infinite;
  transition: font-size 300ms;
  @media only screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`

const shootingDivAni = keyframes`
  0% {
    width: 0em;
    left: 0;
  }

  50% {
    width: 2em;
  }

  100% {
    width: 0em;
    left: 100%;
  }

`

const ShootingDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryText};
  height: 0.4em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation: ${shootingDivAni} ${({ time }) => time || '600ms'}
    ${({ offset }) => offset || '600ms'} ease-in-out;
`

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <H1>
          <TransSpan time="600ms">léon in</TransSpan>
          <ShootingDiv offset="900ms" />
          <TransSpan>'t Veld</TransSpan>
        </H1>
        <H4 floatLength="0.3em">Developer. Designer. Awesome human being.</H4>
        <GoDown
          onClick={() => scroller.scrollTo('aboutMeStart', { smooth: true })}
        />
      </Wrapper>
    )
  }
}
