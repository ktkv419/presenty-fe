import Login from "../../pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
