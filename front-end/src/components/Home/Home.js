import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Slider from "./Slider";
function Home() {
  return (
    <div className="homepage">
      <section className="presentation-section">
        <div className="left">
          <h1>Le Quai Antique</h1>
          <p>Bienvenue chez nous !</p>{" "}
        </div>
        <div className="right">jsp encore quoi mettre </div>{" "}
      </section>
      <section className="menus-section">
        {" "}
        <div className="right-menu">
          <Slider />
        </div>{" "}
        <div className="left-menu">
          <p>Decouvrez nos Menus</p>
          <Link to="/menu">
            <button>Menu</button>
          </Link>{" "}
          <p>ne perdez pas de temps reservez des maintenant</p>
          <Link to="/reserver">
            <button>Réserver</button>
          </Link>
        </div>
      </section>
      <section className="about-section">
        <h2> Qui sommes nous ?</h2>
        <div className="about">
          <div className="left">
            {" "}
            <p className="fade-in">
              {" "}
              blabla blabla blabla blabla blabla blabla blabla blabla blabla
              blabla lb l bl blabla blabla bl lb
            </p>
          </div>
          <div className="right">
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/843610508/fr/photo/int%C3%A9rieur-du-restaurant-cosy-style-loft.jpg?s=612x612&w=0&k=20&c=xkfvApjh2FTHTmiO6QFwRLHy_251G-lGDXo8bzw_9UM="
              alt="First slide"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
