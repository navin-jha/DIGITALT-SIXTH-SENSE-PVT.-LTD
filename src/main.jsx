import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import Laptop from "./components/products/Leptop";
import Desktop from "./components/products/Desktop";
import InteractivePanel from "./components/products/panel";
import Electronic from "./components/products/Electronic";
import PaperStationary from "./components/products/PaperStationary";
import Furniture from "./components/products/Furniture";
import Solar from "./components/products/Solar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
      { path: "products/laptop", element: <Laptop /> },
      { path: "products/desktop", element: <Desktop /> },
      { path: "products/panel", element: <InteractivePanel /> },
      { path: "products/electronic", element: <Electronic /> },
      { path: "products/stationary", element: <PaperStationary /> },
      { path: "products/furniture", element: <Furniture /> },
      { path: "products/solar", element: <Solar /> },
      { path: "products/slug", element: <Products /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);