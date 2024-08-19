import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "@components/errors/error-route";
import NotFound from "@components/errors/not-found";
import Layout from "@components/shared/layout";
import General from "@pages/settings/general";
import Bots from "@pages/settings/bots";





export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute parent />,
    children: [
      // {
      //   index: true,
      //   element: <Settings />,
      //   errorElement: <ErrorRoute />,
      // },
      {
        path: "settings/general",
        element: <General />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "settings/bots",
        element: <Bots />,
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
