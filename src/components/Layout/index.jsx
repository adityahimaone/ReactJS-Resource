import React from "react";
import Nav from "../Navbar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </>
  );
}
