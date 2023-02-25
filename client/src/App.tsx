import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  
} from "react-router-dom";
import { CatProfilePage } from "./components/catProfilePage";
import LandingPage from "./components/landingPage";
import { SearchResultsPage } from "./components/searchResultsPage";
import { RootLayout } from "./layouts/rootLayout";

const BASE_URL = "http://localhost:3000/crazy-cats";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage props={{ url: BASE_URL }} />} />
      <Route
        path="cat_profile"
        element={<CatProfilePage props={{ url: BASE_URL }} />}
      />
      <Route
        path="results"
        element={<SearchResultsPage props={{ url: BASE_URL }} />}
      />
    </Route>
  )
);

const App = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
};

export default App;
