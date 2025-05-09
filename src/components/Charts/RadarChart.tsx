import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';

const data = [
  {
    subject: '数学',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: '国語',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '英語',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: '地理',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: '物理',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: '歴史',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const RadarChartSample: React.FC = () => {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="太郎"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="花子"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};

export default RadarChartSample;
