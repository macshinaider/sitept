"use client"
import React from 'react';
import CountdownTimer from './countdown';


const LaunchPage: React.FC = () => {
  // Defina a data de lançamento no formato JavaScript Date
  const launchDate = new Date('2023-12-09T12:00:00Z');

  return (
    <div>
      <h1>Contagem regressiva para o lançamento do BETA</h1>
      <CountdownTimer date={launchDate} />
    </div>
  );
};

export default LaunchPage;
