import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import Navbar from '@/components/Layout/Navbar';

function App() {
  const element = useRoutes(routes);
  return (
    <div className="app h-screen">
      <Navbar />
      {element}
    </div>
  );
}

export default App;
