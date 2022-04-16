import React, { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { useServices } from "../Context/ServicesContext";
import { useNavigate } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import Loading from "../Pages/Loading";
import { Link } from "react-router-dom";

const PriceCard = ({ id, nickname, unit_amount, product }) => {
  const { user, createSubscription, subscriptionsData, customerPortal } =
    useServices();

  const [loading, setloading] = useState(false);

  let navigator = useNavigate();
  const stripe = useStripe();

  let lprops = {
    loading,
    size: 15,
    color: "#fff",
  };

  useEffect(() => {
    return () => setloading(false);
  }, []);

  const handleSubmit = async () => {
    if (!stripe) {
      return;
    }
    setloading(true);

    if (!user) {
      navigator("Singin", { replace: true });
      return;
    }

    if (subscriptionsData && Object.keys(subscriptionsData)?.length !== 0) {
      try {
        const url = await customerPortal();
        window.location.href = url;
        return;
      } catch (error) {
        console.log(error);
        return setloading(false);
      }
    }
    try {
      const { sessionId } = await createSubscription({ priceId: id });
      await stripe.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  const buttonTextlOGOUT = () => {
    return user
      ? subscriptionsData && subscriptionsData?.plan?.id !== id
        ? "Update Plan "
        : "Buy the plan"
      : "Sign In";
  };

  const buttonText = () => {
    return subscriptionsData && subscriptionsData?.plan?.id === id
      ? "Access plan"
      : buttonTextlOGOUT();
  };
  return (
    <>
      <div
        className={`w-full  md:w-1/3 px-4 mb-12 md:mb-0 ${
          loading && "pointer-events-none cursor-not-allowed"
        }`}
      >
        <div className="max-w-md mx-auto px-6 py-12 md:p-12 bg-white border-4 border-indigo-900 rounded-2xl shadow-md">
          <div className="text-center mb-12">
            <span className="block text-lg font-extrabold text-indigo-500 leading-7">
              {product.metadata.Custom}
            </span>
            <h2 className="text-2xl font-extrabold mb-6">{nickname}</h2>
            <div className="flex justify-center items-start mb-2">
              <span className="pr-1 text-lg font-extrabold">kr</span>
              <span className="text-3xl md:text-4xl font-extrabold">
                {unit_amount / 100}/mth
              </span>
            </div>
            <p className="text-lg font-extrabold leading-7">Billed annually</p>
          </div>
          <div className="flex mb-4 items-start">
            <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
            <span className="text-lg font-bold">Free Market Analysis</span>
          </div>
          <div className="flex mb-4 items-start">
            <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
            <span className="text-lg font-extrabold">
              {product.metadata.stock}
            </span>
          </div>
          <div className="flex mb-8 items-start">
            <CheckCircleIcon className="block w-6 h-6 mr-2 object-contain text-green-600" />
            <span className="text-lg font-bold">Free Email Support</span>
          </div>
          {subscriptionsData?.plan?.id === id ? (
            <Link
              className={`inline-block disabled:opacity-60 w-full py-4 px-6 text-center leading-6 text-lg text-indigo-800 font-extrabold bg-white hover:bg-indigo-900 hover:text-white border-4 border-indigo-900 shadow rounded transition duration-200`}
              to="dashboard/features"
            >
              {loading ? <Loading {...lprops} /> : buttonText()}
            </Link>
          ) : (
            <button
              disabled={loading}
              className={`inline-block disabled:opacity-60 w-full py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900  shadow rounded transition duration-200`}
              onClick={() => handleSubmit()}
            >
              {loading ? <Loading {...lprops} /> : buttonText()}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PriceCard;
