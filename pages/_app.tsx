import "../styles/globals.css";
import type { AppProps } from "next/app";
import StackedLayout from "../components/layouts/StackedLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StackedLayout>
      <Component {...pageProps} />
    </StackedLayout>
  );
}

export default MyApp;
