import React from "react";

import { useServices } from "../Context/ServicesContext";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const { products } = useServices();

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
          {products && !products.length
            ? "Loading..."
            : products?.map((price) => <PriceCard key={price.id} {...price} />)}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
