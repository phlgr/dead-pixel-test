import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: preferredColorScheme,
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
