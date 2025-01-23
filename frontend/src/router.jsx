import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import User from "./pages/User";
import EditUser from "./pages/EditUser";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
        index: true,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
        children: [
          {
            element: (
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            ),
            index: true,
          },
          {
            path: "edit",
            element: (
              <ProtectedRoute>
                <EditUser />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
