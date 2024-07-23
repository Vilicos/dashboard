import Layout from "@components/shared/layout";
import Overview from "@pages/overview";
import Pool from "@pages/pool";

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "pool",
        element: <Pool />,
      },
    ],
  },
]);
