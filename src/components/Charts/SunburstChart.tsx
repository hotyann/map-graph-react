import React from 'react';
import { ResponsiveContainer, SunburstChart } from 'recharts';

const data = {
  name: '収入', // Income
  value: 100,
  children: [
    {
      name: '給与', // Salary
      fill: '#264653',
      value: 30,
      children: [
        {
          name: '基本給', // Base Salary
          value: 10,
        },
        {
          name: 'ボーナス', // Bonus
          value: 5,
        },
        {
          name: '手当', // Allowances
          value: 15,
          children: [
            {
              name: '通勤手当', // Commuting Allowance
              value: 5,
            },
            {
              name: '住宅手当', // Housing Allowance
              value: 5,
            },
            {
              name: '家族手当', // Family Allowance
              value: 5,
              children: [
                {
                  name: '扶養手当', // Dependent Allowance
                  value: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: '副業', // Side Business
      fill: '#2a9d8f',
      value: 20,
      children: [
        {
          name: 'フリーランス', // Freelance
          value: 10,
        },
        {
          name: '投資収益', // Investment Income
          value: 10,
          children: [
            {
              name: '株式', // Stocks
              value: 5,
            },
            {
              name: '暗号資産', // Crypto Assets
              value: 3,
            },
            {
              name: '不動産', // Real Estate
              value: 2,
            },
          ],
        },
      ],
    },
    {
      name: '貯金', // Savings
      fill: '#e9c46a',
      value: 20,
    },
    {
      name: '支出', // Expenses
      fill: '#F4A261',
      value: 10,
      children: [
        {
          name: '食費', // Food
          value: 5,
        },
        {
          name: '光熱費', // Utilities
          value: 5,
        },
      ],
    },
    {
      name: 'その他', // Others
      fill: '#e76f51',
      value: 20,
    },
  ],
};

const SunburstChartSample: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <SunburstChart data={data} innerRadius={40} />
    </ResponsiveContainer>
  );
};

export default SunburstChartSample;
