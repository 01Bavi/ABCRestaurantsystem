import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import MenuPage from './Pages/MenuPage';
import GalleryPage from './Pages/GalleryPage';
import Facilities from './Pages/Facilities';
import ServicesPage from './Pages/ServicesPage';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/menu', element: <MenuPage /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/facilities', element: <Facilities /> },
      { path: '/services', element: <ServicesPage /> },
      // Add routes for Offers, Reservation, Contact, About Us pages
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
