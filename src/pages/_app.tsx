import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from '../styles/global'
import Theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={Theme}>
    <Component {...pageProps} />
    <GlobalStyle/>
  </ThemeProvider>
  )
}

export default MyApp
