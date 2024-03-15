import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainContext } from "./context/MainContext"; // Import MainContext as a named export

import Border from "./Headers/Border";
import Home from "./Headers/Home";
import Store from "./Headers/Store";
import About from "./Headers/About";
import Contact from "./Headers/Contact";
import Login from "./login/Login";
import ShoppingCart from "./Cart/ShoppingCart";

function Main() {
  return (
    <>
      <Border />
      <Home />
    </>
  );
}

function App() {
  return (
    <MainContext> {/* Use the MainContext Provider here */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
              </>
            }
          />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopingcart" element={<ShoppingCart />} /> {/* Corrected the path */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </MainContext>
  );
}

export default App;
