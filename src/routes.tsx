import { createBrowserRouter } from "react-router";

import App from './App.tsx'

import Dashboard from './views/pages/Dashboard.tsx';
import Login from "./views/pages/auth/Login.tsx";
import NotFound from "./views/pages/NotFound.tsx";
import UserManage from "./views/pages/users/UserManage.tsx";
import UserAdd from "./views/pages/users/UserAdd.tsx";
import RoleManage from "./views/pages/roles/RoleManage.tsx";
import RoleAdd from "./views/pages/roles/RoleAdd.tsx";
import CustomerManage from "./views/pages/customers/CustomerManage.tsx";
import CustomerAdd from "./views/pages/customers/CustomerAdd.tsx";
import ProductManage from "./views/pages/products/ProductManage.tsx";
import ProductAdd from "./views/pages/products/ProductAdd.tsx";

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
        path:"/products",
        element:<ProductManage/>
      },

      {
        path:"/Products-add",
        element:<ProductAdd/>
      },

      {
        path:"/user",
        element:<UserManage/>
      },

      {
        path:"/add-user",
        element:<UserAdd/>
      },

      {
        path:"/role",
        element:<RoleManage/>
      },

      {
        path:"/add-role",
        element:<RoleAdd/>
      },

      {
        path:"/customer",
        element:<CustomerManage/>
      },

       {
        path:"/add-customer",
        element:<CustomerAdd/>
      },
]
  },

  {
    path: "*",
    element: <NotFound/>
  },

  {
    path: "/login",
    element: <Login/>
  }
  ]);