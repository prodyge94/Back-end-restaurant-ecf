import Navigation from "./components/Navbar/Navigation";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Menus from "./components/Menus/Menus";
import EditMenu from "./components/Admin/EditMenu";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";

import TableComponent from "./components/Admin/Table";
import ReservationForm from "./components/Reservation/Reservation";
import ReservationList from "./components/Admin/reservartionList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menus />} />
          <Route exact path="/editmenus" element={<EditMenu />} />
          <Route exact path="/reserver" element={<ReservationForm />} />
          <Route exact path="/reservationsList" element={<ReservationList />} />
          <Route exact path="/tablesList" element={<TableComponent />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/signin" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
