import { theme } from './theme';

type theme = typeof theme;

declare module 'styled-components' {
  export interface DefaltTheme extends Theme {}
}
