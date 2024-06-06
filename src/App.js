import React from "react";
import Nav from "./Components/Pages/Nav";
import Cart from "./Components/Cart/Cart";
import Index from "./Components/Layout/Index";
import MenuListItems from "./Components/menu/MenuListItems";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="" element={<Index />} />
          <Route path="add" element={<Cart />} />
          <Route path="menuList" element={<MenuListItems />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
