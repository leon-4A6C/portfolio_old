import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { scroller } from 'react-scroll'

const goDownAni = props => keyframes`
0% {
  height: 0em;
  bottom: ${props.height};
}

60% {
  height: ${props.height};
  bottom: 0;
}

100% {
  height: 0em;
  bottom: 0;
}

`

const goUpAni = props => keyframes`
0% {
  height: 0em;
  top: ${props.height};
}

60% {
  height: ${props.height};
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
  ${({ top }) =>
    top
      ? css`
          top: 0;
          animation: ${goUpAni} 1s ease-in-out infinite alternate;
        `
      : css`
          bottom: 0;
          animation: ${goDownAni} 1s ease-in-out infinite alternate;
        `};
`

const GoDownWrapper = styled.div`
  height: ${({ height }) => height};
  width: 1em;
  margin: 0 auto;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ top }) => (top ? css`top: 0;` : css`bottom: 0;`)};
`

const Wrapper = styled.div`
  height: ${({ height }) => height};
  width: 1em;
  margin: 0 auto;
`

export default props => {
  const height = props.height || '3.7em'
  return (
    <Wrapper height={height} {...props}>
      <GoDownWrapper
        onClick={() => scroller.scrollTo(props.to, { smooth: true })}
        height={height}
      >
        <GoDownAnimated height={height} top={props.top} />
      </GoDownWrapper>
    </Wrapper>
  )
}
