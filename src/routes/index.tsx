import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "@components/errors/error-route";
import NotFound from "@components/errors/not-found";
import Layout from "@components/shared/layout";
import Overview from "@pages/overview";
import Pool from "@pages/pool";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute parent />,
    children: [
      {
        index: true,
        element: <Overview />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "pool",
        element: <Pool />,
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
