import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "./routes/routesConfig";

export default function App() {
  const router = createBrowserRouter(routesConfig);

  return <RouterProvider router={router} />;
}
