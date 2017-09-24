import React from 'react'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { token } from './tokens'
import Main from './views'
import { light } from './themes'

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
      req.options.headers.authorization = `Bearer ${token}`
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
      <ThemeProvider theme={light}>
        <ApolloProvider client={apollo}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/:page" component={Main} />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}

export default App
