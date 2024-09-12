import { createBrowserRouter } from "react-router-dom";
import ErrorRoute from "@components/errors/error-route";
import NotFound from "@components/errors/not-found";
import Layout from "@components/shared/layout";
import General from "@pages/settings/general";
import Bots from "@pages/settings/bots";
import Team from "@pages/settings/team";
import CreateCompany from "@pages/auth-page/create-company";
import Knowledge from "@pages/knowledge";
import WebsiteDetails from "@pages/knowledge/details";
import Discord from "@pages/help-desk/discord";
import Insights from "@pages/insights";
import Login from "@pages/auth-page/login";
import Register from "@pages/auth-page/register";
import AuthLayout from "@components/shared/auth-layout";


export const routes = createBrowserRouter([
  {
    path: "login",
    element: <AuthLayout><Login /></AuthLayout>,
    errorElement: <ErrorRoute />,
  },
  {
    path: "register",
    element: <AuthLayout><Register /></AuthLayout>,
    errorElement: <ErrorRoute />,
  },
  {
    path: "create-company",
    element: <AuthLayout><CreateCompany /></AuthLayout>,
    errorElement: <ErrorRoute />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "helpdesk/discord",
        element: <Discord />,
        errorElement: <ErrorRoute />,
      },
      {
        index:true,
        element: <Knowledge />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "knowledge/:name",
        element: <WebsiteDetails />,
        errorElement: <ErrorRoute />,
      },
      {
        path: "insights",
        element: <Insights />,
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
