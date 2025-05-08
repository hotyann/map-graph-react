import React, { useMemo, useEffect } from 'react';
import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';
import { DeckProps } from '@deck.gl/core';
import { ScatterplotLayer } from '@deck.gl/layers';
import { GoogleMapsOverlay } from '@deck.gl/google-maps';

const GOOGLE_MAPS_API_KEY = process.env.GoogleMapsAPIKey || '';
const GOOGLE_MAP_ID = process.env.GoogleMapsMapId || '';

function DeckGLOverlay(props: DeckProps) {
  const map = useMap();
  const overlay = useMemo(() => new GoogleMapsOverlay(props), []);

  useEffect(() => {
    overlay.setMap(map);
    return () => overlay.setMap(null);
  }, [map]);

  overlay.setProps(props);
  return null;
}

const MapSample: React.FC = () => {
  const layers = [
    new ScatterplotLayer({
      id: 'deckgl-circle',
      data: [{ position: [139.723023, 35.625836] }],
      getPosition: (d) => d.position,
      getFillColor: [255, 0, 0, 100],
      getRadius: 1000,
    }),
  ];

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
        defaultCenter={{ lat: 35.625836, lng: 139.723023 }}
        defaultZoom={11}
        mapId={GOOGLE_MAP_ID}
      >
        <DeckGLOverlay layers={layers} />
      </Map>
    </APIProvider>
  );
};

export default MapSample;
