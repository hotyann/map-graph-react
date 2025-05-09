import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data01 = [
  {
    x: 160,
    y: 50,
    z: 200,
  },
  {
    x: 165,
    y: 55,
    z: 260,
  },
  {
    x: 170,
    y: 60,
    z: 400,
  },
  {
    x: 175,
    y: 65,
    z: 280,
  },
  {
    x: 180,
    y: 70,
    z: 500,
  },
  {
    x: 185,
    y: 75,
    z: 200,
  },
];
const data02 = [
  {
    x: 150,
    y: 45,
    z: 240,
  },
  {
    x: 155,
    y: 50,
    z: 220,
  },
  {
    x: 160,
    y: 55,
    z: 250,
  },
  {
    x: 165,
    y: 60,
    z: 210,
  },
  {
    x: 170,
    y: 65,
    z: 260,
  },
  {
    x: 175,
    y: 70,
    z: 230,
  },
];

const ScatterChartSample: React.FC = () => {
  return (
    <ScatterChart
      width={730}
      height={250}
      margin={{
        top: 20,
        right: 20,
        bottom: 10,
        left: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" type="number" name="身長" unit="cm" /> {/* Height */}
      <YAxis dataKey="y" type="number" name="体重" unit="kg" /> {/* Weight */}
      <ZAxis
        dataKey="z"
        type="number"
        range={[64, 144]}
        name="スコア"
        unit="点"
      />{' '}
      {/* Score */}
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name="A校" data={data01} fill="#8884d8" /> {/* School A */}
      <Scatter name="B校" data={data02} fill="#82ca9d" /> {/* School B */}
    </ScatterChart>
  );
};

export default ScatterChartSample;
