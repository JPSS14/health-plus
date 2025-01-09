import type { AppProps } from "next/app";
import { Header } from "../components/header";
import { HPlusThemeProvider } from "../components/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ maxWidth: "1536px", margin: "0 auto" }}>
      <HPlusThemeProvider>
        <Header />
        <Component {...pageProps} />
      </HPlusThemeProvider>
    </div>
  );
}
