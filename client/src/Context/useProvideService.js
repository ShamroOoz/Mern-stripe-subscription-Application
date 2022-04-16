import { fetchFromAPI } from "../Utils/helpers";
import { useState } from "react";
import { useEffect } from "react";
//
export const useProvideService = () => {
  const [user, setUser] = useState(null);
  const [subscriptionsData, setsubscriptionsData] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
      return await fetchFromAPI("getUser", {
        method: "GET",
      }).then(async (response) => {
        setLoading(false);
        return setUser(response);
      });
    };
    fetchData().catch((err) => {
      setLoading(false);
      //localStorage.clear();
      console.error(err);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getSubscription();
      return;
    };
    if (!subscriptionsData) {
      fetchData().catch(console.error);
    }
  }, [subscriptionsData, user]);

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
    setsubscriptionsData(null);
    return localStorage.clear();
  };

  const getIdToken = () => {
    return localStorage.getItem("userToken");
  };

  const getProducts = async () => {
    return fetchFromAPI("prices", {
      method: "GET",
    }).then((response) => {
      setProducts(response);
      return response;
    });
  };

  const createSubscription = async (body) => {
    return fetchFromAPI("create-subscription", {
      method: "POST",
      body,
    });
  };

  const getSubscription = async () => {
    return await fetchFromAPI("subscriptions", {
      method: "Get",
    }).then((response) => {
      setsubscriptionsData(response);
      return;
    });
  };

  const customerPortal = async () => {
    return fetchFromAPI("customer-portal", {
      method: "GET",
    });
  };

  return {
    user,
    loading,
    products,
    signin,
    signup,
    signout,
    getIdToken,
    createSubscription,
    customerPortal,
    getSubscription,
    subscriptionsData,
  };
};
