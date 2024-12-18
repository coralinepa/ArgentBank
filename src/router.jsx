import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      /*{
        path: "profile/:id",
        element: <User/>,
      },
      {
        path: "/sign-in",
        element: <Login />,
      },*/
    ],
  },
]);

export default router;
