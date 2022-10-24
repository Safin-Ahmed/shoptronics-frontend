import { createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      primary: '#FFFFFF',
      secondary: '#3C1FF4',
    },
    text: {
      primary: '#000000',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#2e7d32',
      dark: '#009688',
    },
    error: {
      main: '#d32f2c',
    },
    warning: {
      main: '#ED6C20',
    },
    status: {
      danger: '#e53e3e',
      success: '#2e7d32',
      warning: '#ed6c20',
      error: '#D32F2C',
    },
  },
});

export default theme;
