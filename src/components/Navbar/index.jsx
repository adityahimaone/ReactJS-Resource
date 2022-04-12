import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <nav className="py-3 px-10 bg-gradient-to-b from-blue-900 to to-blue-600">
      <div className="container mx-auto">
        <div className="flex items-center ">
          <div className="grow flex space-x-2 text-white">
            <div className="px-2 bg-white/40 rounded-sm font-bold">R</div>
            <h1 className="font-bold">REDUX</h1>
          </div>
          <div
            className={`w-full bg-gradient-to-b from-white to-bluewhite lg:bg-none fixed lg:static lg:h-auto lg:p-0 top-0 z-50 h-screen p-10 transition-all ${
              offcanvas ? "right-0" : "-right-full "
            }`}
          >
            <div className="flex shrink lg:hidden mb-4">
              <h2 className=" font-bold">MENU</h2>
              <button
                type="button"
                onClick={() => setOffcanvas(!offcanvas)}
                className="absolute top-10 right-10 lg:hidden text-black"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex lg:space-x-8 lg:justify-end lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0 text-black lg:text-white">
              <li>
                <Link to="/" className="relative w-fit px-1 linkHover">
                  <span>Home</span>
                  <span className="linkHoverAttr"></span>
                </Link>
              </li>
              <li>
                <Link to="/article" className="relative w-fit px-1 linkHover">
                  <span>Article</span>
                  <span className="linkHoverAttr"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <button type="button" onClick={() => setOffcanvas(!offcanvas)}>
              <MenuIcon className="w-5 h-5 text-white " />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
