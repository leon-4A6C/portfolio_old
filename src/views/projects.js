import React from 'react'
import styled from 'styled-components'
import { gql, graphql } from 'react-apollo'

import { Wrapper, GoDown, Project } from '../components'

const H2 = styled.h2`text-align: center;`

const ProjectsWrapper = styled.div``

const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

class Projects extends React.Component {
  render() {
    let repos = []
    if (!this.props.data.loading) {
      repos = this.props.data.user.pinnedRepositories.nodes.filter(
        x => !x.isFork
      )
    }
    return (
      <Wrapper id="projects">
        <GoDown top to="aboutMe" />
        <H2>some of my awesome projects</H2>
        <ProjectsWrapper>
          {new Array(repos.length / 2)
            .fill(true) // fill with random data
            .map((x, i) => (
              <Flex key={i}>
                {repos
                  .slice(i * 2, i * 2 + 2)
                  .map((x, i) => <Project data={x} key={i} />)}
              </Flex>
            ))}
        </ProjectsWrapper>
        <GoDown to="contact" />
      </Wrapper>
    )
  }
}

export default graphql(gql`
  query {
    user(login: "leon-4A6C") {
      pinnedRepositories(first: 6) {
        nodes {
          name
          description
          isFork
          license
          updatedAt
          createdAt
          mentionableUsers(first: 10) {
            nodes {
              login
              name
            }
          }
          languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
            totalSize
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`)(Projects)
