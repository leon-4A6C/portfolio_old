import React from 'react'
import styled from 'styled-components'

import { flyIn } from '../animations'

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
`

const H1 = styled.h1`
  font-family: 'Righteous', cursive;
  font-size: 15em;
  transition: all 300ms;
  text-align: center;
  transform: skew(-10deg) rotateZ(-10deg);
  overflow: hidden;
`

const TransSpan = styled.span`
  display: block;
  animation: ${flyIn} ${({ time }) => time}ms ease-in-out;
`

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <H1>
          <TransSpan time={600}>léon in</TransSpan>
          <TransSpan time={300}>'t Veld</TransSpan>
        </H1>
      </Wrapper>
    )
  }
}
