import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Style augmentation for the CssBaseline component
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#211951',
        },
      },
    },
  },
  palette: {
    // Define your color scheme here
    primary: {
      main: '#836FFF',
      light: "#F0F3FF",
      dark: "#211951"
    },
    secondary: {
      main: '#15F5BA',
    },
  },
  typography: {
    fontFamily: [
      'Anonymous Pro',
      'monospace' // Fallback to monospace if "Anonymous Pro" is not available
    ].join(','),
  },
});

export default theme;
