import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import Head from "next/head";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  return (
    <>
      <Head>
        <title>Dead Pixel Test</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="theme-color" content="#000" />
        <meta name="description" content="Dead Pixel Test" />
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
    </>
  );
}
