// deck.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

import React from 'react';
import { Map } from 'react-map-gl/maplibre';
import { DeckGL } from '@deck.gl/react';
import { I3SLoader } from '@loaders.gl/i3s';
import { Tile3DLayer } from '@deck.gl/geo-layers';

const TILESET_URL =
  'https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0';
const MAP_STYLE =
  'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const INITIAL_VIEW_STATE = {
  latitude: 37.78,
  longitude: -122.4,
  zoom: 15.5,
  pitch: 30,
  minZoom: 14,
  maxZoom: 20,
};

const ArcGISSample: React.FC = ({
  data = TILESET_URL,
  mapStyle = MAP_STYLE,
}: {
  data?: string;
  mapStyle?: string;
}) => {
  const layers = [
    new Tile3DLayer({
      id: 'tile-3d-layer',
      data,
      // @ts-expect-error: I3SLoader type mismatch due to version compatibility
      loader: I3SLoader,
      loadOptions: {
        // v9 TODO use compressed textures again
        i3s: { useCompressedTextures: false },
      },
    }),
  ];

  return (
    <div>
      <DeckGL
        style={{ backgroundColor: '#061714' }}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <Map reuseMaps mapStyle={mapStyle} />
      </DeckGL>
    </div>
  );
};
export default ArcGISSample;
