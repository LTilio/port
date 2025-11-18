import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { Home } from "../pages/Home";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "about", element: <home /> },
    ],
  },
  {
    path: "*",
    element: (
      <div className="p-10 text-center text-2xl">Página não encontrada</div>
    ),
  },
]);
