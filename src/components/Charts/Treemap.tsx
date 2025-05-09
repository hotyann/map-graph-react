import React from 'react';
import { Treemap } from 'recharts';

const data = [
  {
    name: '収入', // Income
    children: [
      {
        name: '給与', // Salary
        size: 30000,
      },
      {
        name: '副業', // Side Business
        size: 10000,
      },
      {
        name: '投資収益', // Investment Income
        size: 15000,
      },
    ],
  },
  {
    name: '支出', // Expenses
    children: [
      {
        name: '住宅費', // Housing
        size: 20000,
      },
      {
        name: '食費', // Food
        size: 10000,
      },
      {
        name: '光熱費', // Utilities
        size: 5000,
      },
      {
        name: '交通費', // Transportation
        size: 3000,
      },
      {
        name: '娯楽費', // Entertainment
        size: 7000,
      },
    ],
  },
  {
    name: '貯金', // Savings
    children: [
      {
        name: '普通預金', // Regular Savings
        size: 20000,
      },
      {
        name: '定期預金', // Fixed Deposit
        size: 15000,
      },
    ],
  },
  {
    name: 'その他', // Others
    children: [
      {
        name: '寄付', // Donations
        size: 5000,
      },
      {
        name: '雑費', // Miscellaneous
        size: 3000,
      },
    ],
  },
];

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
