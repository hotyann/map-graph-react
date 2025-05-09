import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: '18-24歳',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29歳',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34歳',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39歳',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49歳',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50歳以上',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: '不明',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

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
