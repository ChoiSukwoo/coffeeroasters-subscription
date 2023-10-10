import Layout from '@layouts/MainLayout';
import React, { useCallback, useState } from 'react';
import Banner from './components/Banner';
import PlanSection from './components/PlanSection';
import SelectSection from './components/SelectSection';
import { SummaryModal } from './components/SummaryModal';
import { WarningModal } from './components/WarningModal';
import { IFormInput } from './data';

const Plan = () => {
  const [summaryText, setSummaryText] = useState<IFormInput>({});
  const [showSummary, setShowSummart] = useState(false);
  const [showAlter, setShowAlter] = useState(false);
  const [showAlterText, setShowAlterText] = useState('');

  const setShowAlterContent = useCallback((text: string) => {
    setShowAlterText(text);
    setShowAlter(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowSummart(false);
    setShowAlter(false);
  }, []);

  return (
    <Layout title="CreatePlan">
      <div style={{ flex: '1' }}>
        <Banner />
        <PlanSection />
        <SelectSection
          setAlterText={setSummaryText}
          setShowSummary={() => setShowSummart(true)}
          setShowAlterText={setShowAlterContent}
        />
      </div>
      <SummaryModal isShow={showSummary} onClose={closeModal} data={summaryText} />
      <WarningModal isShow={showAlter} onClose={closeModal} data={showAlterText} />
    </Layout>
  );
};
export default Plan;
