import React from 'react'
import styled from 'styled-components'


const A = styled.a(props => ( {...props.theme.typography.link, margin: '24px 0 0 0' }))

export default function Link({children}) {

  return <A>{ children }</A>

}
