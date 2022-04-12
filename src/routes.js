import React from "react";
import Index from "./pages/Index";
import Article from "./pages/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function _Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}
