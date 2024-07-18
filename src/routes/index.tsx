import Layout from "@components/layout";
import Test from "@pages/test";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,element:<Test/>
            }
        ]
    }
])