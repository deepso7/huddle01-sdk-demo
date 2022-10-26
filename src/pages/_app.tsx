import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  HuddleClientProvider,
  getHuddleClient,
} from "@huddle01/huddle01-client";

function MyApp({ Component, pageProps }: AppProps) {
  const huddleClient = getHuddleClient("sed");

  return (
    <HuddleClientProvider value={huddleClient}>
      <Component {...pageProps} />
    </HuddleClientProvider>
  );
}

export default MyApp;
