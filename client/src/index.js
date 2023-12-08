import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import SearchingPage from "./SearchingPage";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./ErrorPage";
import ViewList from "./ViewList";
import Login from "./Login";
import Signup from "./Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home/:id" element={<App />} />
      <Route path="/search/:id/:listId" element={<SearchingPage />} />
      <Route path="/mylist/:id" element={<ViewList />} />
      <Route path="*" element={<ErrorPage />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
