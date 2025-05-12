import React from 'react';
import { FunnelChart, Funnel, LabelList, Tooltip } from 'recharts';
import data from '@/mocks/funnelData.json';

const FunnelChartSample: React.FC = () => {
  return (
    <FunnelChart width={730} height={250}>
      <Tooltip />
      <Funnel dataKey="value" data={data} isAnimationActive>
        <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
      </Funnel>
    </FunnelChart>
  );
};

export default FunnelChartSample;
