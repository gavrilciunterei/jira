import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { UIProvicer } from '../context/ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvicer>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </UIProvicer>
  );
}

export default MyApp;
