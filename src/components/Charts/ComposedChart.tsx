import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
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

const ComposedChartSample: React.FC = () => {
  return (
    <ComposedChart width={730} height={250} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default ComposedChartSample;
