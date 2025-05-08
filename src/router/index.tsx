import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import SuspenseLazy from '@/components/SuspenseLazy';

const Map = SuspenseLazy(
  () => import(/* webpackChunkName:"map" */ '@/pages/Map')
);
const Graph = SuspenseLazy(
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
    element: Map,
  },
  {
    path: 'graph',
    element: Graph,
  },
  {
    path: '*',
    element: NotFound,
  },
];

export default routes;
