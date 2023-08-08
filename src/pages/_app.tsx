import { GlobalStyles } from '@/styles/global-styles';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { ThemeProvider, styled } from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Container>OIOIOIOIOI</Container>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
