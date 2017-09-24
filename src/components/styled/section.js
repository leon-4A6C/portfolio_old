import styled from 'styled-components'

export default styled.section`
  min-height: calc(100vh - ${props => props.theme.nav.height} + 1px);
  overflow: auto;
`
