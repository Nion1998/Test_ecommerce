import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Admin_Main from "./layouts/andim_main/Admin_Main";
import Shop from "./components/customer_components/shop/Shop";
import Login from "./components/common_component/login_component/Login";
import Registration from "./components/common_component/registration_component/Registration";
import Customer_Main from "./layouts/Customer_Main/Customer_Main";
import Cart from "./components/customer_components/cart/Cart";
import Dashboard from "./components/admin_components/Dashboard/Dashboard";
import Manage_Products from "./components/admin_components/Admin_SubItem/Manage_Products";
import Add_NewProduct from "./components/admin_components/Admin_SubItem/Add_NewProduct";
import CustomarPrivateRoute from "./Routes/CustomarPrivateRoute";
import AdminPrivate from "./Routes/AdminPrivate";
import Product_Categories from "./components/admin_components/Admin_SubItem/Product_Categories";
import Products_Inventory from "./components/admin_components/Admin_SubItem/Products_Inventory";
import ProductDetail from "./components/common_component/ProductDetail/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Customer_Main></Customer_Main>,
      children: [
        {
          path: "", // Updated path
          loader: () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <Shop></Shop>,
        },
        {
          path: "cart", // Updated path
          element: (
            <CustomarPrivateRoute>
              <Cart></Cart>,
            </CustomarPrivateRoute>
          ),
        },
        {
          path: "login", // Updated path
          element: <Login></Login>,
        },
        {
          path: "registration", // Updated path
          element: <Registration></Registration>,
        },
        {
          path: "productdetail/:proId", // Updated path
          loader: () => {
            return fetch("https://dummyjson.com/products");
          },
          element: <ProductDetail></ProductDetail>,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <AdminPrivate>
          <Admin_Main></Admin_Main>
        </AdminPrivate>
      ),
      children: [
        {
          path: "", // Updated path
          element: (
            <AdminPrivate>
              <Dashboard></Dashboard>
            </AdminPrivate>
          ),
        },
        {
          path: "manageproduct", // Updated path
          element: (
            <AdminPrivate>
              {" "}
              <Manage_Products></Manage_Products>
            </AdminPrivate>
          ),
        },
        {
          path: "addnewproduct", // Updated path
          element: (
            <AdminPrivate>
              <Add_NewProduct></Add_NewProduct>
            </AdminPrivate>
          ),
        },
        {
          path: "Product_Categories", // Updated path
          element: (
            <AdminPrivate>
              <Product_Categories></Product_Categories>
            </AdminPrivate>
          ),
        },
        {
          path: "Products_Inventory", // Updated path
          element: (
            <AdminPrivate>
              <Products_Inventory></Products_Inventory>
            </AdminPrivate>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
