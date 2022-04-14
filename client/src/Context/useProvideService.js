import { fetchFromAPI } from "../Utils/helpers";
import { useState } from "react";
import { useEffect } from "react";
//
export const useProvideService = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      return await fetchFromAPI("getUser", {
        method: "GET",
      }).then((response) => {
        setLoading(false);
        return setUser(response);
      });
    };
    fetchData().catch((err) => {
      setLoading(false);
      console.error(err);
    });
  }, []);

  const signin = async (body) => {
    return await fetchFromAPI("login", {
      method: "POST",
      body,
    }).then((response) => {
      setUser(response.user);
      localStorage.setItem("userToken", response.token);
      return response.user;
    });
  };

  const signup = async (body) => {
    return await fetchFromAPI("register", {
      method: "POST",
      body,
    }).then((response) => {
      setUser(response.user);
      localStorage.setItem("userToken", response.token);
      return response.user;
    });
  };

  const signout = async () => {
    setUser(null);
    return localStorage.clear();
  };

  const getIdToken = () => {
    return localStorage.getItem("userToken");
  };

  return {
    user,
    loading,
    signin,
    signup,
    signout,
    getIdToken,
  };
};
