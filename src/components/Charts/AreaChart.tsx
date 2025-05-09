import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

const AreaChartSample: React.FC = () => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default AreaChartSample;
