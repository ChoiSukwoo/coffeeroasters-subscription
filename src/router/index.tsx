import React from 'react';
import { Routes, Route } from 'react-router';

import NotFound from '@pages/NotFound';
import About from '@pages/About';
import Home from '@pages/Home';
import Plan from '@pages/Plan';

const Router = () => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound />} />
      <Route path={'/'} element={<Home />} />
      <Route path={'/'} element={<About />} />
      <Route path={'*'} element={<Plan />} />
    </Routes>
  );
};

export default Router;
