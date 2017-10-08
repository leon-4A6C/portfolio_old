import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ data }) => data.languages.edges[0].node.color};
`

export default class Project extends React.Component {
  render() {
    const { name } = this.props.data
    return (
      <Wrapper {...this.props}>
        <h3>{name}</h3>
      </Wrapper>
    )
  }
}
