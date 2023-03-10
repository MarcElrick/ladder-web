import type { AppProps } from 'next/app';
import { useTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';
import { Header } from '@/components/Header/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { setLightVariant, setDarkVariant, variant, theme } = useTheme(
    (state) => ({
      variant: state.variant,
      setLightVariant: state.setLightVariant,
      setDarkVariant: state.setDarkVariant,
      theme: state.theme,
    })
  );

  useEffect(() => {
    document.body.style.backgroundColor = theme.colors[variant].background;
  }, [variant]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <button
        onClick={() => {
          if (variant === 'light') {
            setDarkVariant();
          } else if (variant === 'dark') {
            setLightVariant();
          }
        }}
      >
        {variant}
      </button>
    </>
  );
}
