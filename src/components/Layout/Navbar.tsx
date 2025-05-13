import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '@/router';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {routes
          .filter((route) => route.showInNav)
          .map(
            (route) =>
              route.path && (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      isActive ? 'text-yellow-400' : 'text-white'
                    }
                  >
                    {route.path.charAt(0).toUpperCase() + route.path.slice(1)}
                  </NavLink>
                </li>
              )
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
