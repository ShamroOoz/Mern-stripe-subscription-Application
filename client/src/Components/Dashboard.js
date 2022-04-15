import React from "react";
import { useServices } from "../Context/ServicesContext";
import { useNavigate } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";

const Dashboard = () => {
  const stripe = useStripe();
  const { customerPortal } = useServices();
  let navigator = useNavigate();

  const handleSubscription = async () => {
    if (!stripe) {
      return;
    }
    try {
      const url = await customerPortal();
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-26 mt-12">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <span className="text-lg font-extrabold text-indigo-500">
            Subscriptions Status
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-3 mb-4">
            Welcome to Dashboard
          </h1>
        </div>
        <div className="py-12 px-6 md:px-14 border-4 border-indigo-900 rounded-2xl shadow-md">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="max-w-xl">
                <p className="text-xl font-extrabold leading-8 mb-3 capitalize">
                  Prmium
                </p>
                <p className="text-xl font-extrabold leading-8 mb-3">
                  Status : <span className="text-indigo-500">ACTIVE</span>
                </p>
                <p className="text-xl font-extrabold leading-8 mb-3">
                  Card Last 4 Digits :{" "}
                  <span className="text-indigo-500">42424</span>
                </p>
                <p className="text-xl font-extrabold leading-8 mb-3">
                  Current Period End :{" "}
                  <span className="text-indigo-500">ACTIVE</span>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap  lg:justify-end">
                <a
                  className="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-6 text-center leading-6 text-lg hover:text-white hover:bg-indigo-800 font-extrabold bg-white border-3 border-indigo-900 shadow rounded transition duration-200"
                  href="/"
                >
                  Access
                </a>
                <button
                  className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                  onClick={() => handleSubscription()}
                >
                  Manage Subscriptions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
