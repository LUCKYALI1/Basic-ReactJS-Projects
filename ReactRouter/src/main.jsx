import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element:<Layout></Layout>,
    children: [
      { 
        path:"",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
       },
       {
        path:"contact",
        element:<Contact></Contact>
       }
       ,{
        path:"user/:userid",
        element:<User></User>
       }
       ,{
        path:"github",
        element:<Github></Github>
       }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
