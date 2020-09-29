import 'styled-componets';
import defaultTheme from '../src/styles/theme/default.json'

export type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
