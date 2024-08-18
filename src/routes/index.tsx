import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "@components/errors/error-route";
import NotFound from "@components/errors/not-found";
import Layout from "@components/shared/layout";
import Settings from "@pages/dashboard/settings";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute parent />,
    children: [
      {
        index: true,
        element: <Settings />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "*",
        element: <NotFound />,
        errorElement: <ErrorRoute />,
      },
    ],
  },
]);
