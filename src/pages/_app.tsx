import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from '../styles/global'
import Theme from '../styles/theme'
import { AuthProvider } from '../contexts/authContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default MyApp
