import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import SuspenseLazy from '@/components/SuspenseLazy';

const MapSample = SuspenseLazy(
  () => import(/* webpackChunkName:"map" */ '@/pages/Map')
);
const GraphSample = SuspenseLazy(
  () => import(/* webpackChunkName:"graph" */ '@/pages/Graph')
);
const NotFound = SuspenseLazy(
  () => import(/* webpackChunkName:"not-found" */ '@/pages/NotFound')
);

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Navigate to="map" />,
  },
  {
    path: 'map',
    element: MapSample,
  },
  {
    path: 'graph',
    element: GraphSample,
  },
  {
    path: '*',
    element: NotFound,
  },
];

export default routes;
