import React from 'react';
import {
  LineChart,
  Line,
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
    amt: 8000,
  },
  {
    name: 'Osaka',
    uv: 8000,
    pv: 6500,
    amt: 7500,
  },
  {
    name: 'Nagoya',
    uv: 7000,
    pv: 6000,
    amt: 7000,
  },
  {
    name: 'Sapporo',
    uv: 6000,
    pv: 5500,
    amt: 6500,
  },
  {
    name: 'Fukuoka',
    uv: 5000,
    pv: 5000,
    amt: 6000,
  },
  {
    name: 'Hiroshima',
    uv: 4000,
    pv: 4500,
    amt: 5000,
  },
  {
    name: 'Sendai',
    uv: 3000,
    pv: 4000,
    amt: 4500,
  },
];

const LineChartSample: React.FC = () => {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineChartSample;
