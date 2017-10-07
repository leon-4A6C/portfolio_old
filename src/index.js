import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import registerServiceWorker from './registerServiceWorker'
import { light } from './themes'
import Main from './views'
import './index.css'

class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
