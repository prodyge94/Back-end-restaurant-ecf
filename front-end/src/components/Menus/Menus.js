import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Menus.css";
function Menus() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const getMenus = async () => {
      const result = await axios.get("/menus");
      setMenus(result.data);
    };
    getMenus();
  }, []);

  return (
    <div className="menus-container">
      <h2>La carte</h2>
      <div className="card-container">
        <div className="category">
          <h5 id="entrée">entrée et salades</h5>
        </div>
        {menus.map((item) => {
          if (item.category === "entree" || item.category === "salade") {
            return (
              <div className="item" key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description} </p>
                </div>
                <p>{item.price} $</p>
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="category">
          <h5 id="plats">plats</h5>
        </div>
        {menus.map((item) => {
          if (item.category === "plat") {
            return (
              <div className="item" key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description} </p>
                </div>
                <p>{item.price} $</p>
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="category">
          <h5 id="desserts">desserts</h5>
        </div>
        {menus.map((item) => {
          if (item.category === "dessert") {
            return (
              <div className="item" key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description} </p>
                </div>
                <p>{item.price} $</p>
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="category">
          <h5 id="menus">menus Enfant</h5>
        </div>
        {menus.map((item) => {
          if (item.category === "menu_enfant") {
            return (
              <div className="item" key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description} </p>
                </div>
                <p>{item.price} $</p>
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="category">
          <h5>menus Midi</h5>
        </div>
        {menus.map((item) => {
          if (item.category === "menu_midi") {
            return (
              <div className="item" key={item.id}>
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.description} </p>
                </div>
                <p>{item.price} $</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Menus;
