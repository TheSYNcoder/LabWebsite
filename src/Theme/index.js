import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: '#f5776e'
    },
    secondary: {
      main: '#f5776e'
    },
    text: {
      primary: '#f5776e',
      secondary: '#ada4a3'
    }
  },
  shadows,
  typography
});

export default theme;