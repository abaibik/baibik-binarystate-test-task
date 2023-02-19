import Root from "./root";
import ErrorPage from "../ErrorPage";
import Details from "../Details";
import Home from "../Home";

export const routesConfig = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "details",
        element: <Details />,
      },
    ],
  },
];
