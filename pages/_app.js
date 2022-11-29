import localFont from "@next/font/local";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Progress } from "../components/progress/progress";
import { useProgressStore } from "../store";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const IRANYekanUbitex = localFont({
  src: "../assets/fonts/IRANYekanMedium.woff",
});

function MyApp({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Progress isAnimating={isAnimating} />
      <ThemeProvider defaultTheme="dark" attribute="class">
        <main className={IRANYekanUbitex.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
