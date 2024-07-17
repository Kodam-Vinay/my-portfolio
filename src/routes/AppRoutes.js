import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import RenderUi from "../components/RenderUi";
import AdminLogin from "../pages/AdminLogin";
import AdminTable from "../pages/AdminTable";
import AdminTableProtectedRoute from "../utils/AdminTableProtectedRoute";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <RenderUi />,
        },
        {
          path: "/admin-auth",
          element: <AdminLogin />,
        },
        {
          path: "/sercret-admin-table",
          element: (
            <AdminTableProtectedRoute>
              <AdminTable />
            </AdminTableProtectedRoute>
          ),
        },
        {
          path: "/error",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
