import React from 'react'
import styled, { keyframes } from 'styled-components'

const goDownAni = keyframes`
0% {
  height: 0em;
  bottom: 3.7em;
}

60% {
  height: 3.7em;
  bottom: 0;
}

100% {
  height: 0em;
  bottom: 0;
}

`

const GoDownAnimated = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryText};
  width: 2px;
  animation: ${goDownAni} 1s ease-in-out infinite alternate;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`

const GoDownWrapper = styled.div`
  height: 3.7em;
  width: 1em;
  margin: 0 auto;
  cursor: pointer;
`

export default props => (
  <GoDownWrapper {...props}>
    <GoDownAnimated />
  </GoDownWrapper>
)
