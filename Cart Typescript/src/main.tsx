import React from 'react'
import ReactDOM from 'react-dom/client'
import ViewProduct from './ViewProduct.tsx'
import App from './App.tsx'
import Page from './Page.tsx'
import About from './About.tsx'
import Contact from './Contact.tsx'
import './index.css'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Page />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/viewproduct/",
        element: <ViewProduct />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
