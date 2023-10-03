const AboutText = `Home
About us
Create your plan






Our headquarters

United Kingdom
68 Asfordby Rd
Alcaston
SY6 1YA
+44 1241 918425

Canada
1528 Eglinton Avenue
Toronto
Ontario M4P 1A6
+1 416 485 2997

Australia
36 Swanston Street
Kewell
Victoria
+61 4 9928 3629

Home
About us
Create your plan`;

import Layout from '@layouts/MainLayout';
import React from 'react';

import Banner from './components/Banner';
import OurCommitment from './components/OurCommitment';
import UncompromisingQuality from './components/UncompromisingQuality';
import OurHeadquarters from './components/OurHeadquarters';

const About = () => {
  return (
    <Layout title="About Us">
      <div style={{ flex: '1' }}>
        <Banner />
        <OurCommitment />
        <UncompromisingQuality />
        <OurHeadquarters />
      </div>
    </Layout>
  );
};
export default About;
