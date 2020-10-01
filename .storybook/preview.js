
import { ThemeProvider } from 'styled-components';
import Theme from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(getStory) => <ThemeProvider theme={Theme}>{getStory()}</ThemeProvider>];