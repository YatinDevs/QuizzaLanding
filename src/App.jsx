import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Flights from "./pages/Flights/Flights";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/404/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/telegram" element={<PageNotFound />} />
      <Route path="/aboutus" element={<PageNotFound />} />
      <Route path="/github" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
