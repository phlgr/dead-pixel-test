import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import Head from "next/head";
import PlausibleProvider from "next-plausible";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  return (
    <>
      <PlausibleProvider
        domain="deadpixelcheck.net"
        customDomain="https://apps.gartz.dev"
        trackLocalhost
        selfHosted
        enabled
      >
        <Head>
          <title>
            Dead Pixel Check | Easily test your monitor for dead pixels
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <meta name="theme-color" content="#000" />
          <meta
            name="description"
            content="With Dead Pixel Check, you can easily test your monitor or display for dead or broken pixels. Use our easy test now!"
          />
        </Head>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: preferredColorScheme,
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </PlausibleProvider>
    </>
  );
}
