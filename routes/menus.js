const { menuGet, menuCreate, menuDelete } = require("../controllers/menus");

function menuRoute(app) {
  app.get("/menus", menuGet);

  app.post("/menusCreate", menuCreate);

  app.post("/menusDelete", menuDelete);
}

module.exports = menuRoute;
