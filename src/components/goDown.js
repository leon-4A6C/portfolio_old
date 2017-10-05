import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { scroller } from 'react-scroll'

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

const goUpAni = keyframes`
0% {
  height: 0em;
  top: 3.7em;
}

60% {
  height: 3.7em;
  top: 0;
}

100% {
  height: 0em;
  top: 0;
}

`

const GoDownAnimated = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryText};
  width: 2px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ top }) => {
    if (top) {
      return css`
        top: 0;
        animation: ${goUpAni} 1s ease-in-out infinite alternate;
      `
    } else {
      return css`
        bottom: 0;
        animation: ${goDownAni} 1s ease-in-out infinite alternate;
      `
    }
  }};
`

const GoDownWrapper = styled.div`
  height: 3.7em;
  width: 1em;
  margin: 0 auto;
  cursor: pointer;
`

export default props => (
  <GoDownWrapper
    onClick={() => scroller.scrollTo(props.to, { smooth: true })}
    {...props}
  >
    <GoDownAnimated top={props.top} />
  </GoDownWrapper>
)
