import React from 'react'
import styled from 'styled-components'


const H1 = styled.h1(props => ({...props.theme.typography.title, margin: '0' }))

export default function Title({text}) {

  return <H1>{ text }</H1>

}
