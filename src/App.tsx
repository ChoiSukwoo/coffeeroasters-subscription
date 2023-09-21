import React from 'react';
import GlobalStyle from '@styles/global';
import { Route, Routes } from 'react-router-dom';

//Page
import Router from './router';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
