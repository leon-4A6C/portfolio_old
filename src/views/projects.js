import React from 'react'
// import { gql, graphql } from 'react-apollo'

import { Ssection } from '../components/styled'

export default class Projects extends React.Component {
  render() {
    return (
      <Ssection>
        <h2>projects</h2>
      </Ssection>
    )
  }
}

// export default graphql(gql`
//   query {
//     user(login: "leon-4A6C") {
//       repositories(
//         first: 100
//         orderBy: { field: UPDATED_AT, direction: DESC }
//       ) {
//         nodes {
//           name
//           description
//           isFork
//           license
//           updatedAt
//           createdAt
//           mentionableUsers(first: 100) {
//             nodes {
//               login
//               name
//             }
//           }
//           languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
//             nodes {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// `)(Projects)
