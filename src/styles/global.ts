import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background}
  }

  svg {
    display: block;
    fill: currentColor;
    max-width: 100%;
    width: 100%;

    path {
      fill: currentColor;
    }
  }

`
