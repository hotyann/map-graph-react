import React from 'react';
import { PieChart, Pie } from 'recharts';

const data01 = [
  {
    name: '東京',
    value: 400,
  },
  {
    name: '大阪',
    value: 300,
  },
  {
    name: '名古屋',
    value: 300,
  },
  {
    name: '札幌',
    value: 200,
  },
  {
    name: '福岡',
    value: 278,
  },
  {
    name: '広島',
    value: 189,
  },
];
const data02 = [
  {
    name: '東京',
    value: 2400,
  },
  {
    name: '大阪',
    value: 4567,
  },
  {
    name: '名古屋',
    value: 1398,
  },
  {
    name: '札幌',
    value: 9800,
  },
  {
    name: '福岡',
    value: 3908,
  },
  {
    name: '広島',
    value: 4800,
  },
];

const PieChartSample: React.FC = () => {
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default PieChartSample;
