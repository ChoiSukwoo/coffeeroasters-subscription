const planText = `

<!-- Modal -->
Order Summary

“I drink coffee _____, with a _____ type of bean. _____ ground ala _____,
sent to me _____.”

Is this correct? You can proceed to checkout or go back to plan selection if something 
is off. Subscription discount codes can also be redeemed at the checkout.

$_____/month

Checkout
<!-- End modal -->
`;

import Layout from '@layouts/MainLayout';
import React, { useState } from 'react';
import Banner from './components/Banner';
import PlanSection from './components/PlanSection';
import SelectSection, { IFormInput, PreferencesEnum } from './components/SelectSection';
import AlertModal from '@components/AlertModal';
import ModalContent from './components/ModalContent';

const Plan = () => {
  const [alterText, setAlterText] = useState<IFormInput>({});
  const [showSummary, setShowSummart] = useState(false);

  return (
    <Layout title="CreatePlan">
      <div style={{ flex: '1' }}>
        <Banner />
        <PlanSection />
        <SelectSection setAlterText={setAlterText} setShowSummary={() => setShowSummart(true)} />
      </div>
      <AlertModal
        show={showSummary}
        onClose={() => setShowSummart(false)}
        style={{ padding: '0', borderRadius: '10px' }}
      >
        <ModalContent data={alterText} />
      </AlertModal>
    </Layout>
  );
};
export default Plan;
