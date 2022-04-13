import React from "react";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <section className="mt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="text-center  space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Sing Up</h2>
            <p className="text-lg font-bold leading-7 text-indigo-500">
              Start your demo version
            </p>
          </div>
          <form action="">
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="">
                Email
              </label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="email"
                placeholder="hello@shuffle.dev"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="">
                Password
              </label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                placeholder="**********"
              />
            </div>
            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
              Sign Up
            </button>
            <p className="text-center font-extrabold">
              Already have a account?
              <Link className="text-indigo-500 hover:underline" to="/Singin">
                Sing In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingUp;
