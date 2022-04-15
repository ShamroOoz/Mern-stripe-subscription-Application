import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../Utils/helpers";

const Success = () => {
  let [searchParams] = useSearchParams();
  const [dataObject, setdataObject] = useState({});

  useEffect(() => {
    const getResult = async () => {
      const responce = await fetchFromAPI(
        `subscription-status?id=${searchParams.get("session_id")}`,
        {
          method: "GET",
        }
      );
      setdataObject(responce);
    };

    getResult().catch(console.error);
  }, [searchParams]);

  return (
    <section className="py-26 xl:pb-32 bg-white mt-28">
      <div className="container px-4 mx-auto text-center">
        <span className="text-lg font-extrabold text-indigo-500">
          Thnak You{" "}
          <span className="text-black">
            {dataObject && dataObject?.customer_details?.name}
          </span>
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
          Thank you for choosing{" "}
          <span className="text-indigo-500">
            {dataObject && dataObject?.line_items?.data[0]?.description}!
          </span>{" "}
          We appreciate it.
        </h1>
        <p className="max-w-4xl mx-auto text-xl font-extrabold leading-8 mb-12">
          Now you can go to Dashboard and enjoy you Subscription . Sun is a
          Small SaaS Business. Flex isn&rsquo;t a traditional company. We
          believe a diverse team, approaches to work and transparency are key to
          our success.
        </p>
        <Link
          className="inline-block w-full md:w-auto py-4 px-6 leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
          to="/dashboard"
        >
          Go to Dashboard
        </Link>
      </div>
    </section>
  );
};

export default Success;
