const bcrypt = require("bcrypt");
const db = require("./bdd");
async function register(req, res) {
  const { firstName, lastName, email, telephone, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const q = `
    INSERT INTO users (firstName, lastName, email, telephone, password)
    VALUES (?, ?, ?, ?, ?);
  `;

  db.query(q, [firstName, lastName, email, telephone, hash], (err, result) => {
    if (err) throw err;
    res.send("User registered successfully!");
  });
}
async function login(req, res) {
  const { email, password } = req.body;

  const query = `
    SELECT * FROM users
    WHERE email = ?;
  `;

  db.query(query, [email], async (err, results) => {
    if (err) throw err;
    if (!results.length) return res.send("Email or password is incorrect.");

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send("Email or password is incorrect.");
    if (user.isAdmin) {
      res.send("Connecté en tant qu'administrateur.");
    } else {
      res.send("Connecté avec succès.");
    }
  });
}

module.exports = { register, login };
