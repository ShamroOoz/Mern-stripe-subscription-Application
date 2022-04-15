import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useServices } from "../Context/ServicesContext";

const ReqAuth = () => {
  const { user, getIdToken } = useServices();
  let token = getIdToken();

  if (token && user) return <Outlet />;

  return <Navigate to="Singin" />;
};

export default ReqAuth;

export const NotReqAuth = () => {
  const { user, getIdToken } = useServices();
  let token = getIdToken();
  if (!token && !user) return <Outlet />;

  return <Navigate to="/" replace={true} />;
};
