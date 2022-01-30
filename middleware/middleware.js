function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, PATCH, POST, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Max-Age", "86400");
  next();
}

module.exports = cors;
