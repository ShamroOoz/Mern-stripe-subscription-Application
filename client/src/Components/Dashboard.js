import React, { useState } from "react";
import { useServices } from "../Context/ServicesContext";
import { Link } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import moment from "moment";
import Loading from "../Pages/Loading";

const Dashboard = () => {
  const [loading, setloading] = useState(false);
  const stripe = useStripe();
  const { customerPortal, subscriptionsData } = useServices();

  let lprops = {
    loading,
    size: 15,
    color: "#fff",
  };

  const handleSubscription = async () => {
    if (!stripe) {
      return;
    }
    setloading(true);
    try {
      const url = await customerPortal();
      window.location.href = url;
    } catch (error) {
      setloading(false);
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
              {!subscriptionsData ? (
                <p className="text-xl font-extrabold leading-8 mb-3 ">
                  To enjoy real fun of this{" "}
                  <span className="text-indigo-500"> application </span> Go to
                  <span className="text-indigo-500"> Pricing </span>Section and
                  buy the desire package..
                </p>
              ) : (
                <div className="max-w-xl capitalize">
                  <p className="text-xl font-extrabold leading-8 mb-3 capitalize text-indigo-500">
                    {subscriptionsData.plan.nickname}
                  </p>
                  <p className="text-xl font-extrabold leading-8 mb-3">
                    Status :{" "}
                    <span className="text-indigo-500">
                      {subscriptionsData.status}
                    </span>
                  </p>
                  <p className="text-xl font-extrabold leading-8 mb-3">
                    Card Last 4 Digits :{" "}
                    <span className="text-indigo-500">
                      {subscriptionsData.default_payment_method.card.last4}
                    </span>
                  </p>
                  <p className="text-xl font-extrabold leading-8 mb-3">
                    Current Period End :{" "}
                    <span className="text-indigo-500">ACTIVE</span>
                  </p>
                  <p className="text-xl font-extrabold leading-8 mb-3">
                    {" "}
                    Current period end:{" "}
                    <span className="text-indigo-500">
                      {" "}
                      {moment(subscriptionsData.current_period_end * 1000)
                        .format("dddd, MMMM Do YYYY h:mm:ss a")
                        .toString()}
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap  lg:justify-end">
                {!subscriptionsData ? (
                  <Link
                    className="inline-block w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                    to="/"
                  >
                    See Pricing
                  </Link>
                ) : (
                  <>
                    <Link
                      className="inline-block w-full md:w-auto py-4 px-6 mb-4 md:mb-0 md:mr-6 text-center leading-6 text-lg hover:text-white hover:bg-indigo-800 font-extrabold bg-white border-4 border-indigo-900 shadow rounded transition duration-200"
                      to="features"
                    >
                      Access
                    </Link>
                    <button
                      disabled={loading}
                      className="inline-block disabled:opacity-40 disabled:cursor-not-allowed w-full md:w-auto py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900  shadow rounded transition duration-200"
                      onClick={() => handleSubscription()}
                    >
                      {loading ? (
                        <Loading {...lprops} />
                      ) : (
                        "Manage Subscriptions"
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
