export interface Theme {
  colors: {
    accent: {
      primary: string;
      secondary: string;
    };

    light: {
      background: string;
      foreground: string;
      text: string;
    };

    dark: {
      background: string;
      foreground: string;
      text: string;
    };

    accessory: {
      error: string;
      warning: string;
      info: string;
      success: string;
    };
  };
}

export type ThemeVariant = "light" | "dark";
