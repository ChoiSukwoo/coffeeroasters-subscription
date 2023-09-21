import React from 'react';
import GlobalStyle from '@styles/global';
import { HelmetProvider } from 'react-helmet-async';

//Page
import Router from './router';

const App = () => {
  return (
    <>
      <HelmetProvider>
        <GlobalStyle />
        <Router />
      </HelmetProvider>
    </>
  );
};

export default App;
