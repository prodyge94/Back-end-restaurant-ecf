const {
  reservationGet,
  reservationCreate,
  reservationDelete,
} = require("../controllers/reservation");

function reservationRoute(app) {
  app.get("/reservations/:reservationDate", reservationGet);

  app.post("/reservationsCreate", reservationCreate);
  app.post("/reservationsDelete", reservationDelete);
}

module.exports = reservationRoute;
