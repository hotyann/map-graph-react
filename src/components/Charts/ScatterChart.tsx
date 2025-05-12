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
import data01 from '@/mocks/scatterData01.json';
import data02 from '@/mocks/scatterData02.json';

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
