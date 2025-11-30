import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Homepage from "../Pages/Homepage";

export default function News() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
