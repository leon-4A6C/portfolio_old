import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { light } from './themes'
import Main from './views'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:page" component={Main} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

export default App
