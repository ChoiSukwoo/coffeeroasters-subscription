import React, { useCallback } from 'react';

import Layout from '@layouts/MainLayout';
import Banner from './components/Banner';
import Collection from './components/Collection';
import ChooseUs from './components/ChooseUs';
import HowItWorks from './components/HowItworks';
import { Button01 } from '@components/Button/styles';
import { Container, ContainerCover } from '@styles/common';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigator = useNavigate();

  const MoveHome = useCallback((e) => {
    navigator('/plan');
  }, []);

  return (
    <Layout title="HOME">
      <div style={{ flex: '1' }}>
        <Banner />
        <Collection />
        <ChooseUs />
        <HowItWorks />
        <ContainerCover style={{ marginBottom: '200' }}>
          <Container>
            <Button01 onClick={MoveHome}>Create your plan</Button01>
          </Container>
        </ContainerCover>
      </div>
    </Layout>
  );
};
export default Home;
