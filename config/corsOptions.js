export const credentials = (req, res, next) => {
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};
