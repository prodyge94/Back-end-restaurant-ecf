const db = require("./bdd");

async function menuGet(req, res) {
  const q = "SELECT * FROM menus ORDER BY category";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
}
async function menuCreate(req, res) {
  const q =
    "INSERT INTO menus(`name`,`category`,`description`,`price`) VALUES(?,?,?,?)";
  const { name, category, description, price } = req.body;
  db.query(q, [name, category, description, price], (err, data) => {
    if (err) return res.json(err);
    return res.json(`Le plat "${name}" a été ajouté avec succès.`);
  });
}

async function menuDelete(req, res) {
  const deleteQuery = "DELETE FROM menus WHERE name = ?";
  const deleteValues = [req.body.name];
  db.query(deleteQuery, deleteValues, (err, data) => {
    if (err) return res.json(err);
    return res.json(`Le plat "${req.body.name}" a été supprimé avec succès.`);
  });
}
module.exports = { menuGet, menuCreate, menuDelete };
