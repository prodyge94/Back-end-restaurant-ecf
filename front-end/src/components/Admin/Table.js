import React, { useState, useEffect } from "react";
import axios from "axios";

const TableComponent = () => {
  const [tables, setTables] = useState([]);
  const [capacities, setCapacities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/tables");
      setTables(result.data);
      const capacities = result.data.map((table) => table.table_capacity);
      setCapacities(capacities);
    };

    fetchData();
  }, []);

  const handleAddCapacity = (e) => {
    e.preventDefault();
    const newCapacity = parseInt(e.target.capacity.value);
    if (!capacities.includes(newCapacity)) {
      setCapacities([...capacities, newCapacity]);
    }
    e.target.reset();
  };

  const handleAddTable = async (tableCapacity) => {
    await axios.post("/tablesCreate", {
      table_capacity: tableCapacity,
    });
    const result = await axios.get("/tables");
    setTables(result.data);
  };

  const handleDeleteTable = async (capacity) => {
    await axios.post("/tablesDelete", {
      table_capacity: capacity,
    });

    const result = await axios.get("/tables");
    setTables(result.data);
  };

  const getTotalTables = () => {
    let total = 0;
    capacities.forEach((capacity) => {
      const table = tables.find((table) => table.table_capacity === capacity);
      if (table) {
        total += table.table_count;
      }
    });
    return total;
  };

  const getTotalCapacity = () => {
    let total = 0;
    capacities.forEach((capacity) => {
      const table = tables.find((table) => table.table_capacity === capacity);
      if (table) {
        total += table.table_count * table.table_capacity;
      }
    });
    return total;
  };

  return (
    <div>
      <h2>Capacité du restaurant</h2>

      <form onSubmit={handleAddCapacity}>
        <label>
          Ajouter une capacité :
          <select name="capacity">
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        </label>
        <button type="submit">Ajouter</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nombre de table</th>
            <th>Capacité des tables</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {capacities.map((capacity, index) => {
            const table = tables.find(
              (table) => table.table_capacity === capacity
            );
            return (
              <tr key={index}>
                <td>{table ? table.table_count : 0}</td>
                <td>{capacity}</td>
                <td>
                  <button onClick={() => handleAddTable(capacity)}>
                    Ajouter
                  </button>
                  <button onClick={() => handleDeleteTable(capacity)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <p>Nombre total de tables : {getTotalTables()}</p>
        <p>Capacité totale : {getTotalCapacity()}</p>
      </div>
    </div>
  );
};

export default TableComponent;
