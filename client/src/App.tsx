import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./components/landingPage";

const BASE_URL = "http://localhost:3000/crazy-cats";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage props={{ url: BASE_URL }} />} />
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
