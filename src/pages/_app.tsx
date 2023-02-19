import type { AppProps } from 'next/app';
import { HPlusThemeProvider } from '../components/theme';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <HPlusThemeProvider>
      <Component {...pageProps} />
    </HPlusThemeProvider>
  </>
};
