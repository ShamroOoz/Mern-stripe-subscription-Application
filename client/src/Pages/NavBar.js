import React, { useReducer, useEffect, useRef } from "react";
import { SunIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setisOpen] = useReducer((state) => !state, false);
  const node = useRef();

  const trackSidebar = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    // outside scope click
    setisOpen();
  };

  useEffect(() => {
    if (isOpen) document.addEventListener("mousedown", trackSidebar);
    return () => {
      document.removeEventListener("mousedown", trackSidebar);
    };
  }, [isOpen]);

  return (
    <section>
      <nav className="flex justify-between items-center bg-white shadow-md py-5 px-10 relative">
        <NavLink className="text-lg text-indigo-800 " to="/">
          <SunIcon className="h-8" />
        </NavLink>
        <ul className="hidden md:flex">
          <li>
            <NavLink
              className="text-lg mr-10 md:mr-16 font-bold hover:text-indigo-800"
              to="/"
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard"
              className="text-lg font-bold hover:text-indigo-800"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setisOpen()}
            className="navbar-burger focus:outline-none text-indigo-900 hover:text-indigo-500"
          >
            <MenuAlt3Icon className="block h-6 w-6" />
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <NavLink
            className="inline-block mr-6 text-lg font-bold hover:text-indigo-800"
            to="Singin"
          >
            Sign In
          </NavLink>
          <NavLink
            className="inline-block py-4 px-6 text-center leading-6 text-lg text-white font-bold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
            to="Singup"
          >
            Sign Up
          </NavLink>
        </div>
      </nav>
      {/* Side Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden navbar-menu relative z-50`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav
          ref={node}
          onClick={() => setisOpen()}
          className="fixed top-0 left-0 bottom-0 flex flex-col w-full md:w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto"
        >
          <div className="flex items-center mb-8">
            <a className="mr-auto text-2xl font-bold leading-none" href="/">
              <SunIcon className="h-6" />
            </a>

            <button type="button" className="navbar-close">
              <XIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:text-red-500" />
            </button>
          </div>
          <div className="my-auto">
            <ul className="py-10">
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-lg font-bold hover:bg-gray-200 rounded"
                  to="/"
                >
                  Pricing
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className="block p-4 text-lg font-bold hover:bg-gray-200 rounded"
                  to="dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <NavLink
              className="block mb-6 text-center leading-6 text-lg font-bold hover:text-indigo-800"
              to="Singin"
            >
              Sign In
            </NavLink>
            <NavLink
              className="block py-4 px-6 text-center leading-6 text-lg text-white font-bold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              to="Singup"
            >
              Sign Up
            </NavLink>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
