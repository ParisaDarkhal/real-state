"use client";

import { useState } from "react";
import Card from "./Card";
import Map from "./Map";

const Grid = ({ properties }) => {
  const [input, setInput] = useState("");
  const [houses, setHouses] = useState(properties);
  const [locations, setLocations] = useState(
    houses.map((house) => house.location)
  );

  const setInputAndMapLocations = (value) => {
    setInput(value);
    setHouses(
      properties.filter((property) =>
        property.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    setLocations(houses.map((house) => house.location));
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search location"
          onChange={(e) => {
            setInputAndMapLocations(e.target.value);
          }}
          value={input}
        />
        {/* <button>Search</button> */}
      </div>
    </div>
  );
};

export default Grid;
