import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Notification, { notify } from "@/components/Notification";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { set } from "lodash";
import Image from "next/image";

function Loading() {
  return (
    <div className="spinner-wrapper">
      <div className="spinner">
        <Image
          src={"/logo.svg"}
          loading="lazy"
          width={190.36}
          height={72.15}
          alt="Logo do SGP - Soluções em Gestão Públicas"
        />
      </div>
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteStart = () => {
      setLoading(true);
    };

    const handleRouteComplete = () => {
      setLoading(false);
    };

    const handleRouteError = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.on("routeChangeError", handleRouteError);
    };
  }, [router]);

  return (
    <>
      {loading ? <Loading /> : <></>}
      <Component {...pageProps} />
      <Notification />
    </>
  );
}
