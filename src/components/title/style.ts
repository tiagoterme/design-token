import styled, {css} from 'styled-components'

const readOnly = css`
    color: green;
`

export const H1 = styled.h1`
  ${ props => props.readOnly && readOnly}

  &.teste {
    color:blue
  }

  > .icon {
    color: pink
  }
`

