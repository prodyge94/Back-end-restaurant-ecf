import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";

import "./EditMenu.css";

const EditMenu = () => {
  const [show, setShow] = useState(false);
  const [menus, setMenus] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const result = await axios.get("/menus");
    setMenus(result.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !category || !description || !price) {
      setShow(true);
      return;
    }
    if (menus.some((menu) => menu.name === name)) {
      alert("Un menu avec le même nom existe déjà");
      return;
    }
    await axios.post("/menusCreate", {
      name,
      category,
      description,
      price,
    });
    fetchMenus();
    setName("");
    setCategory("");
    setDescription("");
    setPrice("");
  };

  const handleDelete = async (name) => {
    await axios.post("/menusDelete", { name });
    fetchMenus();
  };

  return (
    <div className="editmenu-page">
      <h2>Menus</h2>
      <div className="editmenu">
        <div className="editmenu-form">
          <form onSubmit={handleSubmit}>
            <label>
              nom :
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              categorie :
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="entree">Entrée</option>
                <option value="salade">Salade</option>
                <option value="plat">Plat</option>
                <option value="dessert">Dessert</option>
                <option value="menu_enfant">Menu Enfant</option>
                <option value="menu_midi">Menu Midi</option>
              </select>
            </label>
            <label>
              description :
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                cols={30}
              ></textarea>
            </label>
            <label>
              prix :
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>

            <button type="submit">Create</button>
            {show && (
              <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                Tous les champs sont obligatoires
              </Alert>
            )}
          </form>
        </div>
        <div className="table-menu">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu) => (
                <tr key={menu.name}>
                  <td>{menu.name}</td>
                  <td>{menu.category}</td>
                  <td>{menu.description}</td>
                  <td>{menu.price}</td>
                  <td>
                    <button onClick={() => handleDelete(menu.name)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default EditMenu;
