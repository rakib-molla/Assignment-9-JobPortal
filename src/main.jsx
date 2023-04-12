import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Blog from './components/Blog/Blog';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('../public/job.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjob',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=>fetch('../public/job.json')
      },
      {
        path: 'jobdetails/:id',
        element: <JobDetails></JobDetails>,
        // loader: ({params})=>fetch(`/job.json/${params.id}`)

        loader: ({params})=> fetch('/jobdetails.json')
      }
      
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
