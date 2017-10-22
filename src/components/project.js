import React from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'

import { popIn, pressIn } from '../animations'

const Container = styled.div`
  flex: 1;
  display: flex;
`

const Wrapper = styled.div`
  overflow: hidden;
  padding: 1em;
  border: ${({ theme }) => theme.colors.primaryText} solid 2px;
  margin: 1em;
  animation: ${({ open }) => (open ? pressIn : popIn)}
    ${({ open }) => (open ? '300ms' : '1s')} linear;
  width: 100%;
  flex: 1;
`

const H2 = styled.h2``
const P = styled.p``

/* STUFF to add
 *
 * When clicked swhoop in with a more detailed list
 * When it enters screen do some funky animation
 * Randomly have animations across all the projects to draw viewers attention
 *
 */
export default class Project extends React.Component {
  state = {
    inView: false,
    open: false,
  }

  render() {
    const { name, description } = this.props.data
    return (
      <Container>
        <Waypoint
          onEnter={() => {
            setTimeout(() => this.setState({ inView: true }), 1000)
            console.log('onEnter')
          }}
        />
        {this.state.inView && (
          <Wrapper
            {...this.props}
            {...this.state}
            onClick={() => this.setState({ open: true })}
          >
            <H2>{name}</H2>
            <P>{description}</P>
          </Wrapper>
        )}
      </Container>
    )
  }
}
