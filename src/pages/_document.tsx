import { useTheme } from "@/hooks/useTheme";
import { useThemeVariant } from "@/hooks/useThemeVariant";
import { Html, Head, Main, NextScript } from "next/document";
import { useFela } from "react-fela";
import { styles } from "./_document.styles";

export default function Document() {
  const { theme } = useTheme();
  const { variant } = useThemeVariant();

  return (
    <Html lang="en">
      <Head />
      <body style={styles.body(variant, theme)}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
