import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <Link to="/" />
          </li>
        </ul>
      </footer>
    )
  }
}
