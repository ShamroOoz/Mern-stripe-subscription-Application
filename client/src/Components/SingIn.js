import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validationChecker } from "../Utils/helpers";
import { useServices } from "../Context/ServicesContext";
import Loading from "../Pages/Loading";
import { useNavigate } from "react-router-dom";

//
const SingIn = () => {
  const [error, seterror] = useState({});
  const { signin } = useServices();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  let lprops = {
    loading,
    size: 15,
    color: "#fff",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    const fromData = new FormData(e.target);
    let result = {
      email: fromData.get("email"),
      password: fromData.get("password"),
    };

    let validateResult = validationChecker(result);
    if (Object.keys(validateResult).length !== 0) {
      setloading(false);
      return seterror(validateResult);
    }

    seterror({});
    try {
      await signin(result);
      setloading(false);
      navigate("/", { replace: true });
    } catch (err) {
      setloading(false);
      seterror({ ...error, message: err });
    }
  };

  return (
    <section className="mt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="text-center  space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Sign In</h2>
            <p className="text-lg font-bold leading-7 text-red-500">
              {error.message && error.message}
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="email">
                Email
              </label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="email"
                name="email"
                placeholder="hello@gamail.com"
                autoFocus
              />
              <p className="ml-1 text-sm text-rose-500 mt-2">
                {error.email && error.email}
              </p>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="password">
                Password
              </label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                name="password"
                placeholder="**********"
              />
              <p className="ml-1 text-sm text-rose-500 mt-2">
                {error.password && error.password}
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-block w-full disabled:cursor-not-allowed disabled:opacity-50 py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
            >
              {loading ? <Loading {...lprops} /> : " Sign In"}
            </button>
            <p className="text-center font-extrabold">
              Don&rsquo;t have an account?{" "}
              <Link className="text-indigo-500 hover:underline" to="/Singup">
                Sing Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingIn;
