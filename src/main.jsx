import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Root from './Component/Root/Root';
import Applied from './Component/Aplid/Applied';
import Blogs from './Component/Blogs/blogs';
import Error from './Component/Error/Error';
import Aply from './Component/Aply/Aply';
import Jobsdetails from './Component/Jobdetails/Jobsdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/Applied',
        element: <Applied></Applied>
      },
      {
        path:'/Blogs',
        element:<Blogs></Blogs>
      },
      {
        path: '/Aply',
        element:<Aply></Aply>,
      },
      {
        path: '/job/:id',
        element: <Jobsdetails></Jobsdetails>,
        loader: () => fetch('../public/jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
