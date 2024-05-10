// "use client";

// import { useState } from "react";
// import Card from "./Card";
// import Map from "./Map";

// const Grid = ({ properties }) => {
//   const [input, setInput] = useState("");
//   const [houses, setHouses] = useState(properties);
//   const [locations, setLocations] = useState(
//     houses.map((house) => house.location)
//   );

//   const setInputAndMapLocations = (value) => {
//     setInput(value);
//     setHouses(
//       properties.filter((property) =>
//         property.name.toLowerCase().includes(value.toLowerCase())
//       )
//     );
//     setLocations(houses.map((house) => house.location));
//   };

//   return (
//     <div>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search location"
//           onChange={(e) => {
//             setInputAndMapLocations(e.target.value);
//           }}
//           value={input}
//         />
//         {/* <button>Search</button> */}
//       </div>
//       <main>
//         <article>
//           <Map locations={locations} />
//         </article>
//         <article className="listings">
//           <h2>Rental Listings</h2>
//           <div className="cards-container">
//             {houses.map((property) => (
//               <Card
//                 key={property.id}
//                 propertyName={property.name}
//                 slug={property.slug}
//                 rentalPrice={property.rentalPrice}
//                 bedrooms={property.bedrooms}
//                 image={property.images[0]}
//               />
//             ))}
//           </div>
//         </article>
//       </main>
//     </div>
//   );
// };

// export default Grid;

"use client";

import { useState, useEffect } from "react";
import Card from "./Card";
import Map from "./Map";

const Grid = ({ properties }) => {
  const [input, setInput] = useState("");
  const [houses, setHouses] = useState(properties);

  const setInputAndMapLocations = (value) => {
    setInput(value);
    const filteredHouses = properties.filter((property) =>
      property.name.toLowerCase().includes(value.toLowerCase())
    );
    setHouses(filteredHouses);
  };

  const locations = houses.map((house) => house.location);

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search location"
          onChange={(e) => setInputAndMapLocations(e.target.value)}
          value={input}
        />
      </div>
      <main>
        <article>
          <Map locations={locations} />
        </article>
        <article className="listings">
          <h2>Rental Listings</h2>
          <div className="cards-container">
            {houses.map((property) => (
              <Card
                key={property.id}
                propertyName={property.name}
                slug={property.slug}
                rentalPrice={property.rentalPrice}
                bedrooms={property.bedrooms}
                image={property.images[0]}
              />
            ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Grid;
