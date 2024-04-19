import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Homekeks'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Brownies, ErrorPage } from './pages'
import { NavBar } from './ui'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Home />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
