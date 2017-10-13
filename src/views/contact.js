import React from 'react'
import styled from 'styled-components'

import { Wrapper, GoDown, Form } from '../components'

const SForm = styled(Form.Form)`
  width: 50%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (min-width: 1300px) {
    font-size: 1.6em;
  }
`

const Submit = styled(Form.Submit)`
  display: block;
  margin: 1em auto 0 auto;
  font-size: 1.5em;
  @media only screen and (min-width: 1000px) {
    font-size: 2em;
    margin: 2em auto 0 auto;
  }
`

const H2 = styled.h2`
  font-size: 5em;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 3em;
  }
`

export default class Contact extends React.Component {
  render() {
    return (
      <Wrapper id="contact">
        <GoDown top to="projects" />
        <H2>contact</H2>
        <SForm>
          My name is <Form.Input /> and I got a hard <b>D</b> from this site. I
          would like you to make a <Form.Input /> for me to make my costumers
          get a hard <b>D</b> too. Contact me with this <Form.Input /> email or
          with this <Form.Input /> phone number. <Submit value="send" />
        </SForm>
      </Wrapper>
    )
  }
}
