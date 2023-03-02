import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import "./Reservation.css";

function ReservationForm() {
  const [show, setShow] = useState(false);
  const [Message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [reservationDate, setReservationDate] = useState("");
  const [slotTimeId, setSlotTimeId] = useState(1);
  const [slotsTime, setSlotsTime] = useState([]);

  useEffect(() => {
    axios
      .get("/slots")
      .then((response) => {
        setSlotsTime(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !telephone ||
      !numberOfGuests ||
      !reservationDate ||
      !slotTimeId
    ) {
      setMessage("Merci de remplir tout les champs");
      setShow(true);
      return;
    }
    axios
      .post("/reservationsCreate", {
        firstName,
        lastName,
        email,
        telephone,
        numberOfGuests,
        reservationDate,
        slotTimeId,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data === "Reservation created successfully.") {
          setMessage("Reservation créée avec succès !");
          setShow(true);
        }
        if (
          response.data ===
          "No available tables for the selected date and time."
        ) {
          setMessage(
            "Il n'y a plus de table disponible pour cette tranche horaire"
          );
          setShow(true);
        }
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  }

  return (
    <div className="reservation-page">
      <h2>Je Reserve</h2>
      <div className="reservation-form">
        <form onSubmit={handleSubmit}>
          <label>
            Prénom :
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>

          <label>
            Nom :
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>

          <label>
            Email :
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            Téléphone :
            <input
              type="tel"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            />
          </label>

          <label>
            Nombre d'invités :
            <input
              type="number"
              value={numberOfGuests}
              onChange={(event) => setNumberOfGuests(event.target.value)}
            />
          </label>

          <label>
            Date de réservation :
            <input
              type="date"
              value={reservationDate}
              onChange={(event) => setReservationDate(event.target.value)}
            />
          </label>

          <label>
            Heure de réservation :
            <select
              value={slotTimeId}
              onChange={(event) => setSlotTimeId(event.target.value)}
            >
              {slotsTime.map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.start_time}
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Réserver</button>

          {show && (
            <Alert variant="dark" onClose={() => setShow(false)} dismissible>
              {Message}
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
