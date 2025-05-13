import React, { useState } from 'react';
import Select from 'react-select';
import ArcLayerSample from '@/components/Graphs/ArcLayer';
import ContourLayerSample from '@/components/Graphs/ContourLayer';
import GeojsonLayerPolygonsSample from '@/components/Graphs/GeojsonLayerPolygons';
import GeojsonLayerPathsSample from '@/components/Graphs/GeojsonLayerPaths';
import ArcGISSample from '@/components/Graphs/ArcGIS';
import MapboxSample from '@/components/Graphs/Mapbox';

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
  {
    label: 'Integrations',
    options: [
      { value: 'arcgis', label: 'ArcGIS' },
      { value: 'mapbox', label: 'Mapbox' },
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
      case 'arcgis':
        return <ArcGISSample />;
      case 'mapbox':
        return <MapboxSample />;
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
          options={groupedOptions}
        />
      </div>
      {renderGraph()}
    </div>
  );
};

export default MapSample;
