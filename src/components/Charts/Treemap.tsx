import React from 'react';
import { Treemap } from 'recharts';
import data from '@/data/treemapData.json';

const TreemapSample: React.FC = () => {
  return (
    <Treemap
      width={730}
      height={250}
      data={data}
      dataKey="size"
      aspectRatio={4 / 3}
      stroke="#fff"
      fill="#8884d8"
    />
  );
};

export default TreemapSample;
