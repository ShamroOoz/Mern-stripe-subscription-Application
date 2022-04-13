import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="grid h-screen content-center bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <span className="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-heading mb-3">
            Page not found
          </h1>
          <p className="text-xl font-extrabold leading-7 mb-6">
            Something went wrong, so this page is broken.
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <Link
              className="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              to="/"
            >
              Go back to Homepage
            </Link>
            <Link
              className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-indigo-900 hover:text-white font-extrabold bg-white hover:bg-indigo-800 border-3 border-indigo-900 shadow rounded transition duration-200"
              to="/"
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
