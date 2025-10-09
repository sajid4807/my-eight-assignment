import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../components/AppDetails/AppDetails";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import ErrorId from "../components/ErrorId/ErrorId";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPages />,
    children: [
      {
        index: true,
        path: "/",
        loader:()=> fetch('../homeData.json'),
        Component: Home,
      },
      {
        path:'apps',
        loader:()=> fetch('../allData.json'),
        Component:Apps
      },
      {
        path:'install',
        loader:()=> fetch('../allData.json'),
        Component:Installation
      },
      {
        path:'/appDetails/:id',
        errorElement:<ErrorId />,
        loader:()=> fetch('../allData.json'),
        Component:AppDetails,
        
      },
    ],
  },
]);
