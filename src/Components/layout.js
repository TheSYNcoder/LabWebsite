import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Helmet from "react-helmet";
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './GlobalStyles';

import theme from '../Theme';

export default function Layout(props) {
  // eslint-disable-next-line
  const { children } = props;
  return (
    <div>

      <Helmet>
          <title>DVLP | Jadavpur University</title>
          <meta name="description" content="Deep Vision and Language Processing lab Jadavpur University" />
      </Helmet>
      
      <Navigation />
      <ThemeProvider theme={theme} >
          <GlobalStyles />
          {children}
          <Footer />
      </ThemeProvider>
    </div>
  );
}