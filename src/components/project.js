import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: hidden;
  padding: 1em;
  border: ${({ theme }) => theme.colors.primaryText} solid 2px;
  margin: 1em;
  flex: 1;
`

const H2 = styled.h2``
const P = styled.p``

export default class Project extends React.Component {
  render() {
    const { name, description } = this.props.data
    return (
      <Wrapper {...this.props}>
        <H2>{name}</H2>
        <P>{description}</P>
      </Wrapper>
    )
  }
}
