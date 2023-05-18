import React from "react";
import "./app.scss";

//Pages
import Add from "./pages/Add/Add";
import Home from "./pages/Home/Home";
import Gig from "./pages/Gig/Gig";
import Gigs from "./pages/Gigs/Gigs";
import Login from "./pages/Login/Login";
import Message from "./pages/Message/Message";
import Messages from "./pages/Messages/Messages";

import MyGigs from "./pages/MyGigs/MyGigs";
import Orders from "./pages/Orders/Orders";
import Register from "./pages/Register/Register";

//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
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
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
