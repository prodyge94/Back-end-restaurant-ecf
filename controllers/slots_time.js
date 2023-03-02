const db = require("./bdd");

async function slotGet(req, res) {
  const q = "SELECT * FROM slots_time";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
}

module.exports = { slotGet };
