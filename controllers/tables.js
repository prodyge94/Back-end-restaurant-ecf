const db = require("./bdd");
async function tableGet(req, res) {
  const q =
    "SELECT table_capacity, COUNT(*) as table_count FROM tables GROUP BY table_capacity";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
}
async function tableDispo(req, res) {
  const q =
    "SELECT table_capacity, COUNT(*) as tables_dispo FROM tables WHERE availability = TRUE GROUP BY table_capacity";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
}
async function tableCreate(req, res) {
  const q = "INSERT INTO tables(`table_capacity`) VALUES(?)";
  const createTable = [req.body.table_capacity];
  db.query(q, [createTable], (err, data) => {
    if (err) return res.json(err);
    return res.json(`La table a été ajouté avec succès.`);
  });
}
async function tableAvailability(req, res) {
  const q =
    "UPDATE tables SET availability = NOT availability WHERE table_capacity = ? LIMIT 1";
  const values = [req.body.table_capacity];
  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json(
      `La disponibilité de la table  a été mise à jour avec succès.`
    );
  });
}
async function tableDelete(req, res) {
  const deleteQuery = "DELETE FROM tables WHERE table_capacity = ? LIMIT 1";
  const deleteValues = [req.body.table_capacity];
  db.query(deleteQuery, deleteValues, (err, data) => {
    if (err) return res.json(err);
    return res.json(
      `La table avec une capacité de "${req.body.table_capacity}" a été supprimée avec succès.`
    );
  });
}
module.exports = {
  tableGet,
  tableCreate,
  tableDelete,
  tableAvailability,
  tableDispo,
};
