const { register, login } = require("../controllers/user");

function userRoute(app) {
  app.post("/register", register);
  app.post("/login", login);
}

module.exports = userRoute;
