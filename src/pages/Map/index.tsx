import React, { useState } from 'react';
import Select from 'react-select';
import ArcLayerSample from '@/components/Graphs/ArcLayer';
import ContourLayerSample from '@/components/Graphs/ContourLayer';
import GeojsonLayerPolygonsSample from '@/components/Graphs/GeojsonLayerPolygons';
import GeojsonLayerPathsSample from '@/components/Graphs/GeojsonLayerPaths';

type OptionType = {
  value: string;
  label: string;
};

type GroupedOption = {
  label: string;
  options: OptionType[];
};

const groupedOptions: GroupedOption[] = [
  {
    label: 'Layers',
    options: [
      { value: 'arc-layer', label: 'ArcLayer' },
      { value: 'contour-layer', label: 'ContourLayer' },
      { value: 'geojson-layer-polygons', label: 'GeoJsonLayer (Polygons)' },
      { value: 'geojson-layer-paths', label: 'GeoJsonLayer (Paths)' },
    ],
  },
];

const MapSample: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    groupedOptions.slice(-1)[0].options.slice(-1)[0]
  );

  const renderGraph = () => {
    switch (selectedOption?.value) {
      case 'arc-layer':
        return <ArcLayerSample />;
      case 'contour-layer':
        return <ContourLayerSample />;
      case 'geojson-layer-polygons':
        return <GeojsonLayerPolygonsSample />;
      case 'geojson-layer-paths':
        return <GeojsonLayerPathsSample />;
      default:
        return <div>Please select a chart to display.</div>;
    }
  };

  return (
    <div className="h-full relative overflow-hidden p-4">
      <Select
        className="z-1"
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={groupedOptions}
      />
      {renderGraph()}
    </div>
  );
};

export default MapSample;
