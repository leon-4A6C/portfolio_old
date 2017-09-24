import React from 'react'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { token } from './tokens'

import { Home } from './views'

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
      <ApolloProvider client={apollo}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
