import styled from 'styled-components'

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  position: relative;
  min-height: 100vh;
`

export default Wrapper
