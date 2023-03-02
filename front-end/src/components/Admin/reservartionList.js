import React, { useState } from "react";
import axios from "axios";

function ReservationList() {
  const [reservations, setReservations] = useState([]);
  const [reservationDate, setReservationDate] = useState("");

  const getReservations = async () => {
    const result = await axios.get(`/reservations/${reservationDate}`);
    console.log(result);
    setReservations(result.data);
  };
  const handleDateChange = (event) => {
    setReservationDate(event.target.value);
  };
  const handleDelete = async (id) => {
    await axios.post("/reservationsDelete", { id });
    getReservations();
  };
  return (
    <div>
      <h2>Reservations</h2>
      <div>
        <label htmlFor="date">Reservation Date:</label>
        <input
          type="date"
          id="date"
          value={reservationDate}
          onChange={handleDateChange}
        />
        <button onClick={getReservations}>Get Reservations</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Name</th>
            <th>numero de telephone</th>
            <th>horaire de reservation</th>
            <th>Number of Guests</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>
                {reservation.firstName} {reservation.lastName}
              </td>
              <td>{reservation.telephone}</td>
              <td>{reservation.start_time}</td>
              <td>{reservation.number_of_guests}</td>
              <td>
                <button onClick={() => handleDelete(reservation.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationList;
