import "../styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import NextNProgress from "nextjs-progressbar";
import ScrollUp from "../components/ScrollUp";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      <NextNProgress
        color="#22B573"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <ScrollUp />
    </ThirdwebProvider>
  );
}

export default MyApp;
