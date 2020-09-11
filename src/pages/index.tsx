import React from 'react'
import styled from 'styled-components'

const Button = styled.h1`
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
  border: none;
  color: white;
`

export default function Home() {
  return (
    <div>ertwerwerwer <Button> tsdtstd</Button></div>
  )
}
