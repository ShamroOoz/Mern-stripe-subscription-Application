const API =
  process.env.NODE_ENV === "production"
    ? "https://react-e-commerce-stripe-payment-application-backend-server.vercel.app"
    : "http://localhost:5000/api";

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { body: null, ...opts };

  const token = localStorage.getItem("userToken") || "";

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 200) {
    return res.json();
  } else {
    let err = await res.json();
    throw err.error;
  }
}

const emailValidation = (email) => {
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
};

export const validationChecker = (result) => {
  let errors = {};

  if (!Object.values(result).some(Boolean)) {
    errors.message = "Please fill all the fields....";
  }

  if (result.name && result.name.length < 5) {
    errors.name = "Full Name must be 5 characters long!";
  }
  if (result.email && !emailValidation(result.email)) {
    errors.email = "Email is not valid!";
  }
  if (result.password && result.password.length < 8) {
    errors.password = "Password must be 8 characters long!";
  }

  return errors;
};
