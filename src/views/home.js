import React from 'react'
// import { gql, graphql } from 'react-apollo'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>home</h1>
      </div>
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
// `)(Home)
