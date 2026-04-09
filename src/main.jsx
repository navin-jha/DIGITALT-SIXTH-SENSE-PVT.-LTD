import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import About from './pages/About';
import Contact from './pages/Contact';
import App from './App';
import Home from './pages/Home';
import Products from './pages/Products';

// ✅ Category Pages
import Laptop from './components/products/Leptop';
import Desktop from './components/products/Desktop';
import InteractivePanel from './components/products/panel';
import Electronic from './components/products/Electronic';
import PaperStationary from './components/products/PaperStationary';
import Furniture from './components/products/Furniture';
import Solar from './components/products/Solar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },

      // ✅ Parent Products Page
      { path: "products", element: <Products /> },

      // ✅ Category Routes (clean grouping 🔥)
      {
        path: "products",
        children: [
          { path: "laptop", element: <Laptop /> },
          { path: "desktop", element: <Desktop /> },
          { path: "panel", element: <InteractivePanel /> },
          { path: "Electronic", element: <Electronic /> },
          { path: "Stationary", element: <PaperStationary /> },
          { path: "furniture", element: <Furniture /> },
          { path: "solar", element: <Solar /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);