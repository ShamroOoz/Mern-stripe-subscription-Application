import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useServices } from "../Context/ServicesContext";

const Pricing = () => {
  const { user } = useServices();
  return (
    <section className="py-26 bg-white">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
          Business is only as good as its tools.
        </h1>
        <p className="text-xl font-extrabold leading-8 mb-16">
          Pricing that scales with your business immediately.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
            <div className="max-w-md mx-auto px-6 py-12 md:p-12 bg-white border-4 border-indigo-900 rounded-2xl shadow-md">
              <div className="text-center mb-12">
                <span className="block text-lg font-extrabold text-indigo-500 leading-7">
                  Custom Tag
                </span>
                <h2 className="text-2xl font-extrabold mb-6">Basic Plan</h2>
                <div className="flex justify-center items-start mb-2">
                  <span className="pr-1 text-lg font-extrabold">$</span>
                  <span className="text-3xl md:text-4xl font-extrabold">
                    10/mth
                  </span>
                </div>
                <p className="text-lg font-extrabold leading-7">
                  Billed annually
                </p>
              </div>
              <div className="flex mb-4 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Mauris pellentesque congue libero nec
                </span>
              </div>
              <div className="flex mb-4 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Suspendisse mollis tincidunt
                </span>
              </div>
              <div className="flex mb-8 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Mauris pellentesque congue libero nec
                </span>
              </div>
              <a
                className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="/"
              >
                {user ? " Get Started" : "Sing Up"}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-12 md:mb-0">
            <div className="max-w-md mx-auto px-6 py-12 md:p-12 bg-white border-4 border-indigo-900 rounded-2xl shadow-md">
              <div className="text-center mb-12">
                <span className="block text-lg font-extrabold text-indigo-500 leading-7">
                  Custom Tag
                </span>
                <h2 className="text-2xl font-extrabold mb-6">
                  Freelancer Plan
                </h2>
                <div className="flex justify-center items-start mb-2">
                  <span className="pr-1 text-lg font-extrabold">$</span>
                  <span className="text-3xl md:text-4xl font-extrabold">
                    99/mth
                  </span>
                </div>
                <p className="text-lg font-extrabold leading-7">
                  Billed annually
                </p>
              </div>
              <div className="flex mb-4 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Mauris pellentesque congue libero nec
                </span>
              </div>
              <div className="flex mb-4 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Suspendisse mollis tincidunt
                </span>
              </div>
              <div className="flex mb-8 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Mauris pellentesque congue libero nec
                </span>
              </div>
              <a
                className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="/"
              >
                {user ? " Get Started" : "Sing Up"}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <div className="max-w-md mx-auto px-6 py-12 md:p-12 bg-white border-4 border-indigo-900 rounded-2xl shadow-md">
              <div className="text-center mb-12">
                <span className="block text-lg font-extrabold text-indigo-500 leading-7">
                  Custom Tag
                </span>
                <h2 className="text-2xl font-extrabold mb-6">
                  Enterprise Plan
                </h2>
                <div className="flex justify-center items-start mb-2">
                  <span className="pr-1 text-lg font-extrabold">$</span>
                  <span className="text-3xl md:text-4xl font-extrabold">
                    799/mth
                  </span>
                </div>
                <p className="text-lg font-extrabold leading-7">
                  Billed annually
                </p>
              </div>
              <div className="flex mb-4 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Mauris pellentesque congue libero nec
                </span>
              </div>
              <div className="flex mb-4 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Suspendisse mollis tincidunt
                </span>
              </div>
              <div className="flex mb-8 items-start">
                <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
                <span className="text-lg font-extrabold">
                  Mauris pellentesque congue libero nec
                </span>
              </div>
              <a
                className="inline-block w-full py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="/"
              >
                {user ? " Get Started" : "Sing Up"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
