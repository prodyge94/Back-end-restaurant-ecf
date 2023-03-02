const {
  tableGet,
  tableCreate,
  tableDelete,
  tableAvailability,
  tableDispo,
} = require("../controllers/tables");

function tableRoute(app) {
  app.get("/tables", tableGet);

  app.post("/tablesAvailability", tableAvailability);
  app.get("/tablesAvailability", tableDispo);

  app.post("/tablesCreate", tableCreate);

  app.post("/tablesDelete", tableDelete);
}

module.exports = tableRoute;
