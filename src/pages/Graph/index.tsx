import React, { useState } from 'react';
import Select from 'react-select';
import AreaChartSample from '@/components/Charts/AreaChart';
import BarChartSample from '@/components/Charts/BarChart';
import LineChartSample from '@/components/Charts/LineChart';
import ComposedChartSample from '@/components/Charts/ComposedChart';
import PieChartSample from '@/components/Charts/PieChart';
import RadarChartSample from '@/components/Charts/RadarChart';
import RadialBarChartSample from '@/components/Charts/RadialBarChart';
import ScatterChartSample from '@/components/Charts/ScatterChart';
import FunnelChartSample from '@/components/Charts/FunnelChart';
import TreemapSample from '@/components/Charts/Treemap';
import SankeySample from '@/components/Charts/Sankey';
import SunburstChartSample from '@/components/Charts/SunburstChart';

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: 'AreaChart', label: 'AreaChart' },
  { value: 'BarChart', label: 'BarChart' },
  { value: 'LineChart', label: 'LineChart' },
  { value: 'ComposedChart', label: 'ComposedChart' },
  { value: 'PieChart', label: 'PieChart' },
  { value: 'RadarChart', label: 'RadarChart' },
  { value: 'RadialBarChart', label: 'RadialBarChart' },
  { value: 'ScatterChart', label: 'ScatterChart' },
  { value: 'FunnelChart', label: 'FunnelChart' },
  { value: 'Treemap', label: 'Treemap' },
  { value: 'Sankey', label: 'Sankey' },
  { value: 'SunburstChart', label: 'SunburstChart' },
];

const GraphSample: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const renderChart = () => {
    switch (selectedOption?.value) {
      case 'AreaChart':
        return <AreaChartSample />;
      case 'BarChart':
        return <BarChartSample />;
      case 'LineChart':
        return <LineChartSample />;
      case 'ComposedChart':
        return <ComposedChartSample />;
      case 'PieChart':
        return <PieChartSample />;
      case 'RadarChart':
        return <RadarChartSample />;
      case 'RadialBarChart':
        return <RadialBarChartSample />;
      case 'ScatterChart':
        return <ScatterChartSample />;
      case 'FunnelChart':
        return <FunnelChartSample />;
      case 'Treemap':
        return <TreemapSample />;
      case 'Sankey':
        return <SankeySample />;
      case 'SunburstChart':
        return <SunburstChartSample />;
      default:
        return <div>Please select a chart to display.</div>;
    }
  };

  return (
    <div className="p-4">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <div className="flex flex-col items-center gap-4 mt-4">
        {renderChart()}
      </div>
    </div>
  );
};

export default GraphSample;
