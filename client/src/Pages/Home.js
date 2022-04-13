import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import Pricing from "../Components/Pricing";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen gap-20">
      <section className="relative">
        <div className="container px-4 mx-auto relative">
          <div className="flex flex-wrap  -mx-4 lg:mt-24 mt-28 items-center">
            <div className="w-full lg:w-1/2 px-4 ">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading mt-1 mb-6">
                  Business is only as good as its tools.
                </h1>
                <p className="text-xl md:text-2xl font-extrabold leading-8 mb-10">
                  We&rsquo;re different. Sun is the only SaaS business platform
                  that lets you run your business on one platform, seamlessly
                  across all digital channels.
                </p>
                <div className="flex flex-wrap -mx-2 mb-6">
                  <div className="w-full md:w-auto lg:w-7/12 px-2 mb-2 md:mb-0">
                    <input
                      className="block w-full p-4 text-lg font-extrabold placeholder-indigo-900 shadow border-2 border-indigo-900 rounded"
                      type="email"
                      placeholder="hello@sun.app "
                    />
                  </div>
                  <div className="w-full md:w-auto lg:w-5/12 px-2">
                    <Link
                      className="inline-flex w-full md:w-auto items-center justify-center h-full py-4 px-5 leading-6 text-md text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded transition duration-200"
                      to="/"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap items-center">
                  <div className="flex mr-8 items-center">
                    <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                    <span className="text-lg font-extrabold">
                      No Credit Card required
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                    <span className="text-lg font-extrabold">Free updates</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-10 hidden lg:block ">
              <img
                className="block md:h-96 md:w-10/12 md:max-w-lg object-cover border-4 border-indigo-900  rounded-2xl shadow-lg"
                src="https://images.unsplash.com/photo-1543306983-a562d8739781"
                alt="palm"
              />
            </div>
          </div>
        </div>
      </section>
      <Pricing />

      <section className="py-26 xl:pb-32 bg-white">
        <div className="container px-4 mx-auto text-center">
          <span className="text-lg font-extrabold text-indigo-500">
            Section label
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
            Lorem Ipsum is simply dummy text of the printing
          </h1>
          <p className="max-w-4xl mx-auto text-xl font-extrabold leading-8 mb-12">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,
          </p>
          <Link
            className="inline-block w-full md:w-auto py-4 px-6 leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
            to="/"
          >
            Get Started
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
