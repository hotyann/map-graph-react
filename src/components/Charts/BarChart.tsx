import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Tokyo',
    uv: 9000,
    pv: 7000,
  },
  {
    name: 'Osaka',
    uv: 8000,
    pv: 6500,
  },
  {
    name: 'Nagoya',
    uv: 7000,
    pv: 6000,
  },
  {
    name: 'Sapporo',
    uv: 6000,
    pv: 5500,
  },
  {
    name: 'Fukuoka',
    uv: 5000,
    pv: 5000,
  },
  {
    name: 'Hiroshima',
    uv: 4000,
    pv: 4500,
  },
  {
    name: 'Sendai',
    uv: 3000,
    pv: 4000,
  },
];

const BarChartSample: React.FC = () => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartSample;
