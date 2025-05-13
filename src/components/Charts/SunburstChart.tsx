import React from 'react';
import { ResponsiveContainer, SunburstChart } from 'recharts';
import data from '@/data/sunburstData.json';

const SunburstChartSample: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <SunburstChart data={data} innerRadius={40} />
    </ResponsiveContainer>
  );
};

export default SunburstChartSample;
