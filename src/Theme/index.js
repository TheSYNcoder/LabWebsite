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
      main: '#8d0000'
    },
    secondary: {
      main: '#8d0000'
    },
    text: {
      primary: '#8d0000',
      secondary: '#757272'
    }
  },
  shadows,
  typography
});

export default theme;