import React from "react";
import Nav from "./Components/Pages/Nav";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Index from "./Components/Layout/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="" element={<Index />} />
          <Route path="add" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
