const db = require("./bdd");

async function reservationCreate(req, res) {
  const {
    firstName,
    lastName,
    email,
    telephone,
    numberOfGuests,
    reservationDate,
    slotTimeId,
  } = req.body;

  // Vérifier la disponibilité de la table
  const tableQuery = `
      SELECT * FROM tables 
      WHERE table_capacity >= ${numberOfGuests} 
      AND is_available = true 
      AND id NOT IN (
        SELECT table_id FROM reservations 
        WHERE reservation_date = '${reservationDate}' 
        AND slot_time_id = ${slotTimeId}
      ) 
      LIMIT 1;
    `;
  db.query(tableQuery, (err, tableResults) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (tableResults.length === 0) {
      return res.json("No available tables for the selected date and time.");
    }
    const tableId = tableResults[0].id;

    // Créer une nouvelle réservation
    const createQuery = `
        INSERT INTO reservations (
          firstName,
          lastName,
          email,
          telephone,
          number_of_guests,
          reservation_date,
          slot_time_id,
          table_id
        ) VALUES (
          '${firstName}',
          '${lastName}',
          '${email}',
          '${telephone}',
          ${numberOfGuests},
          '${reservationDate}',
          ${slotTimeId},
          ${tableId}
        );
      `;
    db.query(createQuery, (err, createResults) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json("Reservation created successfully.");
    });
  });
}

async function reservationGet(req, res) {
  const reservationDate = req.params.reservationDate;
  const q = `SELECT 
  reservations.id,
  reservations.firstName, 
  reservations.lastName, 
  reservations.telephone, 
  reservations.number_of_guests, 
  slots_time.start_time
FROM 
  reservations 
  INNER JOIN slots_time 
  ON reservations.slot_time_id = slots_time.id
WHERE 
  reservations.reservation_date = '${reservationDate}'
ORDER BY 
  slots_time.start_time ASC;
`;

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
}
async function reservationDelete(req, res) {
  const reservationId = req.body.id;
  const deleteQuery = "DELETE FROM reservations WHERE id= ?";

  db.query(deleteQuery, [reservationId], (err, data) => {
    if (err) return res.json(err);
    return res.json("reservation supprime avec succes");
  });
}
module.exports = { reservationGet, reservationCreate, reservationDelete };
