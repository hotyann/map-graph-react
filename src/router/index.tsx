import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import SuspenseLazy from '@/components/SuspenseLazy';

type CustomRouteObject = RouteObject & {
  showInNav?: boolean;
};

const MapSample = SuspenseLazy(
  () => import(/* webpackChunkName:"map" */ '@/pages/Map')
);
const GraphSample = SuspenseLazy(
  () => import(/* webpackChunkName:"graph" */ '@/pages/Graph')
);
const NotFound = SuspenseLazy(
  () => import(/* webpackChunkName:"not-found" */ '@/pages/NotFound')
);

const routes: Array<CustomRouteObject> = [
  {
    path: '/',
    element: <Navigate to="map" />,
  },
  {
    path: 'map',
    element: MapSample,
    showInNav: true,
  },
  {
    path: 'graph',
    element: GraphSample,
    showInNav: true,
  },
  {
    path: '*',
    element: NotFound,
  },
];

export default routes;
