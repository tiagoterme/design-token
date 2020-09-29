import React from 'react'
import styled from 'styled-components'


const P = styled.p(props => ( {...props.theme.typography.text, margin: '24px 0 0 0' }))

export default function Text({children}) {

  return <P>{ children }</P>

}
