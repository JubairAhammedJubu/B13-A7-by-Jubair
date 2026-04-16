import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";
import "./index.css";
import Loader from "./components/Loader";

const homeData = fetch("/friends.json").then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home homeData={homeData}></Home>
          </Suspense>
        ),
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friends.json").then((res) => res.json()),
      },
      {path: "/timeline", element: <Timeline />},
      {path: "/stats", element: <Stats />},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
