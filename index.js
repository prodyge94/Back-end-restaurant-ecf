require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 3000;
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.static("front-end/build"));
// installer cors pour autoriser a faire des requetes http sur le meme port ?
const cors = require("cors");
app.use(cors());
// installer bodyParser sinon ca lit pas le body
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// importer toute les routes pour toutes les tables de mysql
const menuRoute = require("./routes/menus");
menuRoute(app);
const userRoute = require("./routes/user");
userRoute(app);
const tableRoute = require("./routes/tables");
tableRoute(app);
const slotRoute = require("./routes/slots_time");
slotRoute(app);
const reservationRoute = require("./routes/reservation");
reservationRoute(app);

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./front-end/build", "index.html"));
});
app.listen(port, () => {
  console.log("serveur lancee", port);
});
