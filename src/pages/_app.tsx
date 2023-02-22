import type { AppProps } from 'next/app';
import { Header } from '../components/header';
import { HPlusThemeProvider } from '../components/theme';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <HPlusThemeProvider>
      <Header/>
      <Component {...pageProps} />
    </HPlusThemeProvider>
  </>
};
