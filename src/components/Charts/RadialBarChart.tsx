import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import data from '@/mocks/radialBarData.json';

const RadialBarChartSample: React.FC = () => {
  return (
    <RadialBarChart
      width={730}
      height={250}
      innerRadius="10%"
      outerRadius="80%"
      data={data}
      startAngle={180}
      endAngle={0}
    >
      <RadialBar
        label={{ fill: '#666', position: 'insideStart' }}
        background
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
      <Tooltip />
    </RadialBarChart>
  );
};

export default RadialBarChartSample;
