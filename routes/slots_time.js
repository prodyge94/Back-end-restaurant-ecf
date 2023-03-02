const { slotGet } = require("../controllers/slots_time");

function slotRoute(app) {
  app.get("/slots", slotGet);
}
module.exports = slotRoute;
