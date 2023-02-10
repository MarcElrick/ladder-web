import type { AppProps } from "next/app";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

export default function App({ Component, pageProps }: AppProps) {
  const renderer = createRenderer();

  return (
    <RendererProvider renderer={renderer}>
      <Component {...pageProps} />
    </RendererProvider>
  );
}
