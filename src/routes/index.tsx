import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "@components/errors/error-route";
import NotFound from "@components/errors/not-found";
import Layout from "@components/shared/layout";
import Overview from "@pages/overview";
import Protocols from "@pages/protocols";
import Pools from "@pages/pools";
import Governance from "@pages/governance";
import CoinDetails from "@pages/details/coin-details";

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
        path: "protocols",
        element: <Protocols/>,
        errorElement: <ErrorRoute />,
      },
      {
        path: "pools",
        element: <Pools/>,
        errorElement: <ErrorRoute />,
      },
      {
        path: "governance",
        element: <Governance/>,
        errorElement: <ErrorRoute />,
      },
      {
        path: "coin-details",
        element: <CoinDetails/>,
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
