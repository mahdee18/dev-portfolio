import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
