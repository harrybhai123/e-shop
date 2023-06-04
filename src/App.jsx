import React from 'react'
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from './pages/Product/Product';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Pay from './components/Pay/Pay';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';


const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/payment",
        element: <Pay />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
