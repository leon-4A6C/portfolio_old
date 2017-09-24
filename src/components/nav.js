import React from 'react'
import ReactDOM from 'react-dom'
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

const Slink = styled(Link)`
  display: block;
  padding: 0 1em;
  line-height: ${props => props.theme.nav.height};
`

const Indicator = styled.div`
  display: block;
  width: 1em;
  height: 0.2em;
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.colors.secundary};
`

export default class Nav extends React.Component {
  pages = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'projects',
      path: '/projects',
    },
  ]

  componentDidUpdate() {
    if (Object.keys(this.refs).length > 0) {
      console.log(
        ReactDOM.findDOMNode(this.refs['li-0']).getBoundingClientRect(),
      )
    }
  }

  render() {
    console.log(this.props)
    return (
      <Snav>
        <Indicator />
        <Sul>
          {this.pages.map((x, i) => (
            <Sli ref={`li-${i}`} key={`li-${i}`}>
              <Slink key={`link-${i}`} to={x.path}>
                {x.name}
              </Slink>
            </Sli>
          ))}
        </Sul>
      </Snav>
    )
  }
}
