import React from 'react'
import styled from 'styled-components'

export const Form = styled.form`font-size: 1.4em;`
export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: dotted ${({ theme }) => theme.colors.primaryText};
`
const InputSubmit = props => (
  <input type="submit" {...props}>
    {props.children}
  </input>
)
export const Submit = styled(InputSubmit)`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.2em 0.4em;
  cursor: pointer;
`
