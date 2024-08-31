import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "@components/errors/error-route";
import NotFound from "@components/errors/not-found";
import Layout from "@components/shared/layout";
import General from "@pages/settings/general";
import Bots from "@pages/settings/bots";
import Team from "@pages/settings/team";
import Auth from "@pages/auth-page";
import CreateCompany from "@pages/auth-page/create-company";
import Knowledge from "@pages/knowledge";
import WebsiteDetails from "@pages/knowledge/details";
import Discord from "@pages/help-desk/discord";


export const routes = createBrowserRouter([
  {
    path: "login",
    element: <Auth />,
    errorElement: <ErrorRoute parent />,
  },
  {
    path: "register",
    element: <Auth />,
    errorElement: <ErrorRoute parent />,
  },
  {
    path: "create-company",
    element: <CreateCompany />,
    errorElement: <ErrorRoute parent />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute parent />,
    children: [
      {
        path: "helpdesk/discord",
        element: <Discord />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "knowledge",
        element: <Knowledge />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "knowledge/:name",
        element: <WebsiteDetails />,
        errorElement: <ErrorRoute />,
      },
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
        path: "settings/team",
        element: <Team />,
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
