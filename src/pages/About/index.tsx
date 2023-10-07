import Layout from '@layouts/MainLayout';
import React from 'react';

import Banner from './components/Banner';
import OurCommitment from './components/OurCommitment';
import UncompromisingQuality from './components/UncompromisingQuality';
import OurHeadquarters from './components/OurHeadquarters';

const About = () => (
  <Layout title="About Us">
    <div style={{ flex: '1' }}>
      <Banner />
      <OurCommitment />
      <UncompromisingQuality />
      <OurHeadquarters />
    </div>
  </Layout>
);
export default About;
