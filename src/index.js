import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo'

import registerServiceWorker from './registerServiceWorker'
import { light } from './themes'
import Main from './views'
import './index.css'
import { github } from './token'

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
})

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {} // Create the header object if needed.
      }

      // Send the login token in the Authorization header
      req.options.headers.authorization = `Bearer ${github}`
      next()
    },
  },
])

const apollo = new ApolloClient({
  networkInterface,
})

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={light}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/:page" component={Main} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
