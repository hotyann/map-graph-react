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
  { value: 'area-chart', label: 'AreaChart' },
  { value: 'bar-chart', label: 'BarChart' },
  { value: 'line-chart', label: 'LineChart' },
  { value: 'composed-chart', label: 'ComposedChart' },
  { value: 'pie-chart', label: 'PieChart' },
  { value: 'radar-chart', label: 'RadarChart' },
  { value: 'radial-bar-chart', label: 'RadialBarChart' },
  { value: 'scatter-chart', label: 'ScatterChart' },
  { value: 'funnel-chart', label: 'FunnelChart' },
  { value: 'treemap', label: 'Treemap' },
  { value: 'sankey', label: 'Sankey' },
  { value: 'sunburst-chart', label: 'SunburstChart' },
];

const GraphSample: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options[0]
  );

  const renderChart = () => {
    switch (selectedOption?.value) {
      case 'area-chart':
        return <AreaChartSample />;
      case 'bar-chart':
        return <BarChartSample />;
      case 'line-chart':
        return <LineChartSample />;
      case 'composed-chart':
        return <ComposedChartSample />;
      case 'pie-chart':
        return <PieChartSample />;
      case 'radar-chart':
        return <RadarChartSample />;
      case 'radial-bar-chart':
        return <RadialBarChartSample />;
      case 'scatter-chart':
        return <ScatterChartSample />;
      case 'funnel-chart':
        return <FunnelChartSample />;
      case 'treemap':
        return <TreemapSample />;
      case 'sankey':
        return <SankeySample />;
      case 'sunburst-chart':
        return <SunburstChartSample />;
      default:
        return <div>Please select a chart to display.</div>;
    }
  };

  return (
    <div className="h-full relative overflow-hidden">
      <div className="absolute top-2 right-4 z-10 w-1/4">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <div className="flex flex-col items-center gap-4 mt-20">
        {renderChart()}
      </div>
    </div>
  );
};

export default GraphSample;
