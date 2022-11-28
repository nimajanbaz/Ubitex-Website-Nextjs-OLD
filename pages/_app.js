import localFont from '@next/font/local'
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const IRANYekanUbitex = localFont({ src: '../assets/fonts/IRANYekanMedium.woff' })

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className={IRANYekanUbitex.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
