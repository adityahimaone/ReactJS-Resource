import React from "react";
import Index from "./pages/Index";
import Article from "./pages/Article";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

export default function _Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/article" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
