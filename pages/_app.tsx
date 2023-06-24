import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Notification, { notify } from "@/components/Notification";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Notification />
    </>
  );
}
