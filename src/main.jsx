import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
// import { RouterProvider } from "react-router/dom";
// import {router} from './Routes/Routes.jsx'
import {router} from './Routes/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
