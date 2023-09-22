import React, { FC, ReactElement } from 'react';

import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { LayoutStyle } from './style';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: String;
  headerSticky: boolean;
  children: ReactElement | ReactElement[];
}

const Layout = ({ title, headerSticky, children }: Props) => {
  return (
    <>
      <Helmet>
        <title>Coffee | {title}</title>
      </Helmet>
      <LayoutStyle>
        <Header isSticky={headerSticky} />
        {children}
        <Footer />
      </LayoutStyle>
    </>
  );
};

Layout.defaultProps = {
  headerSticky: false,
};
export default Layout;
