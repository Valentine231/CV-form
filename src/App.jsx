import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Geninfo from './Geninfo';
import Edu from './Edu';
import Exp from './Exp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Geninfo />,
  },
  {
    path: '/Edu',
    element: <Edu />,
  },
  {
    path: '/Exp',
    element: <Exp />,
  },
]);

const App = () => {
  const { routes } = router;
  return <RouterProvider router={router} />;
};

export default App;
