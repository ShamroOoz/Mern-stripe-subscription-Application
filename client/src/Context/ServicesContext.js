import React, { useContext, createContext } from "react";
import { useProvideService } from "./useProvideService";
import Loading from "../Pages/Loading";

const servicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const { loading, ...services } = useProvideService();
  let lprops = {
    loading,
    size: 15,
    color: "#31278B",
  };
  if (loading)
    return (
      <div className="grid place-items-center h-screen">
        <Loading {...lprops} />
      </div>
    );
  return (
    <servicesContext.Provider value={services}>
      {children}
    </servicesContext.Provider>
  );
};

export const useServices = () => {
  return useContext(servicesContext);
};
