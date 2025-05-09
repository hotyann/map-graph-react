import React from 'react';
import { FunnelChart, Funnel, LabelList, Tooltip } from 'recharts';

const data = [
  {
    value: 100,
    name: '表示',
    fill: '#8884d8',
  },
  {
    value: 80,
    name: 'クリック',
    fill: '#83a6ed',
  },
  {
    value: 60,
    name: '訪問',
    fill: '#8dd1e1',
  },
  {
    value: 40,
    name: '問い合わせ',
    fill: '#82ca9d',
  },
  {
    value: 20,
    name: '購入',
    fill: '#a4de6c',
  },
];

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
