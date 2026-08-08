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
import ProductManage from "./views/pages/inventory/products/ProductManage.tsx";
import ProductAdd from "./views/pages/inventory/products/ProductAdd.tsx";
import CategoryManage from "./views/pages/inventory/category/CategoryaMange.tsx";
import CategoryAdd from "./views/pages/inventory/category/CategoryAdd.tsx";
import InvManage from "./views/pages/inventory/Inv/InvManage.tsx";
import InvAdd from "./views/pages/inventory/Inv/InvAdd.tsx";
import ProductVarientManage from "./views/pages/inventory/productVarient/PdtVarientManage.tsx";
import PdtVarientAdd from "./views/pages/inventory/productVarient/PdtVarientAdd.tsx";
import StockMgtManage from "./views/pages/inventory/stockmanage/StockMgtMange.tsx";
import StockMgtAdd from "./views/pages/inventory/stockmanage/StockMgtAdd.tsx";

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

      {
        path:"/category",
        element:<CategoryManage/>
      },

      {
        path:"/add-category",
        element:<CategoryAdd/>
      },

      {path:"/inventory",element:<InvManage/>},

      {path:"/add-inventory", element:<InvAdd/>},

      {path:"/product-varient",element:<ProductVarientManage/>},

      {path:"/add-product-varient",element:<PdtVarientAdd/>},

      {path:"/stock-manage",element:<StockMgtManage/>},
      
      {path:"/add-stock-manage",element:<StockMgtAdd/>},
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