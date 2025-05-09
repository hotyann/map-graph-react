import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';

function App() {
  const element = useRoutes(routes);
  return <div className="app h-screen">{element}</div>;
}

export default App;
