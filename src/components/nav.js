import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Snav = styled.nav`
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 0 0.4em 0 rgba(0, 0, 0, 0.4);
  height: ${props => props.theme.nav.height};
  color: ${props => props.theme.colors.primaryText};
  position: fixed;
  width: 100%;
  top: 0;
`

const Sul = styled.ul`
  height: ${props => props.theme.nav.height};
  padding: 0;
  margin: 0;
  list-style-type: none;
`

const Sli = styled.li`display: inline-block;`

const SLink = styled(Link)`
  display: block;
  padding: 0 1em;
  line-height: ${props => props.theme.nav.height};
`

const Indicator = styled.div`
  display: block;
  width: 1em;
  height: 0.2em;
  position: absolute;
`

export default class Nav extends React.Component {
  render() {
    return (
      <Snav>
        <Sul>
          <Sli>
            <SLink to="/">home</SLink>
          </Sli>
          <Sli>
            <SLink to="/projects">projects</SLink>
          </Sli>
        </Sul>
      </Snav>
    )
  }
}
