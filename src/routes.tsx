import { createBrowserRouter } from "react-router";

import App from './App.tsx'
import InvManage from './views/pages/Inventory/InvManage.tsx';
import Dashboard from './views/pages/Dashboard.tsx';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children:[
      {
        path:"/",
        element:<Dashboard/>
      },

      {
        path:"/inventory",
        element:<InvManage/>
      },
]
  },
  ]);