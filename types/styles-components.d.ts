import { theme } from '../src/styles/theme';

type theme = typeof theme;

declare module 'styled-components' {
  export interface DefaltTheme extends Theme {}
}
