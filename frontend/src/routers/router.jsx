import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/Checkout";
import SingleBook from "../pages/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import ManageBooks from "../Dashboard/ManageBook/ManageBooks";
import AddBook from "../Dashboard/AddBook/AddBook";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UpdateBook from "../Dashboard/EditBook/UpdateBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <DashboardLayout />
          </AdminRoute>
        ),
        children: [
          {
            path: "",
            element: (
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            ),
          },
          {
            path: "add-new-book",
            element: (
              <AdminRoute>
                <AddBook />
              </AdminRoute>
            ),
          },
          {
            path: "edit-book/:id",
            element: (
              <AdminRoute>
                <UpdateBook />
              </AdminRoute>
            ),
          },
          {
            path: "manage-books",
            element: (
              <AdminRoute>
                <ManageBooks />
              </AdminRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
