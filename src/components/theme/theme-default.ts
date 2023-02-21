import { createTheme } from '@mui/material';

const primaryColor = "#4A1B8C";
const secondaryColor = "#5E308C";
const lightColor = "#A676A3";
const textPrimary = "#F2C49B";
const textSecondary = "#D9AB9A";

declare module '@mui/material/styles' {
  type HPlus = {
    primaryColor: string;
    secondaryColor: string;
    lightColor: string;
    textPrimary: string;
    textSecondary: string;
  };
  interface Palette {
    hplus: HPlus;
  }
  interface PaletteOptions {
    hplus: HPlus;
  }
};


export const theme = createTheme({
  palette: {
    hplus: {
      primaryColor,
      secondaryColor,
      lightColor,
      textPrimary,
      textSecondary
    },
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          background: '#4A1B8C',
          color: '#F2C49B',
          '&:hover': {
            background: '#F2C49B',
            color: '#4A1B8C',
          }
        },
        textSecondary: {
          background: '#D9AB9A',
          color: '#5E308C',
          '&:hover': {
            background: '#5E308C',
            color: '#D9AB9A',
          }
        }
      }
    }
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  direction: 'ltr',
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width:600px)': { minHeight: 64 },
    },
  },
});
