import React, { useState, useEffect } from "react";
import { getFeatureData } from "../Utils/Data";
import HeroIcon from "../Utils/HeroIcon";
import { useServices } from "../Context/ServicesContext";
import { Navigate, useNavigate } from "react-router-dom";

const Features = () => {
  const [dataList, setdataList] = useState([]);
  const { user, subscriptionsData } = useServices();

  let navigate = useNavigate();

  useEffect(() => {
    switch (subscriptionsData?.plan?.nickname) {
      case "Basic":
        setdataList(getFeatureData(5));
        break;
      case "Freelancer Plan":
        setdataList(getFeatureData(10));
        break;
      case "Enterprise Plan":
        setdataList(getFeatureData(20));
        break;
      default:
        navigate("/dashboard", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, subscriptionsData]);

  if (!user || !subscriptionsData || subscriptionsData?.status !== "active")
    return <Navigate to="/dashboard" replace />;

  return (
    <section className="py-26 mt-8">
      <div className="container px-4 mx-auto relative">
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading mt-4 mb-6">
            You are subscribe to{" "}
            <span className="text-indigo-500">
              {Object.keys(subscriptionsData).length !== 0 &&
                subscriptionsData &&
                subscriptionsData?.plan.nickname}
            </span>{" "}
            You can acces {dataList?.length} exclusive Stock, Happy Hacking 🙂
          </h1>
          <p className="text-xl font-extrabold leading-8">
            Gain more insight into how people use your With our integrated CRM,
            project management, collaboration and invoicing capabilities, you
            can manage every aspect of your business in one secure platform.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-12">
          {dataList.length > 0 &&
            dataList.map((data) => (
              <div
                key={data.id}
                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12"
              >
                <div className="h-full py-12 px-8 bg-white border-4 border-indigo-900 shadow-md rounded-2xl text-center">
                  <HeroIcon IconName={data?.IconName} color={data?.color} />
                  <h4 className="text-2xl font-extrabold mb-4 text-indigo-900">
                    {data.title}
                  </h4>
                  <p className="text-lg font-bold leading-7">
                    {data.descripition}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
