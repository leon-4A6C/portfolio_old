import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { light } from './themes'
import { Home } from './views'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:page" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App
