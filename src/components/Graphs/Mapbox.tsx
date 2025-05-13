import React, { useRef } from 'react';
import { Map, MapRef } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.MapboxAccessToken;
if (!MAPBOX_TOKEN) {
  console.error(
    'Mapbox Access Token is missing. Please set it in your environment variables.'
  );
}

const MapboxSample: React.FC = () => {
  const mapRef = useRef<MapRef | null>(null);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11?language=ja"
      localIdeographFontFamily="'Noto Sans CJK JP', sans-serif"
      antialias={true}
      initialViewState={{
        longitude: 139.6917,
        latitude: 35.6895,
        zoom: 12,
        bearing: 0,
        pitch: 45,
      }}
      aria-label="Interactive map of Tokyo, Japan"
    ></Map>
  );
};

export default MapboxSample;
