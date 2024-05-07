import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import Card from "./components/Card";
import "dotenv/config";
import { query } from "express";

const getProperties = async () => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
  if (!HYGRAPH_ENDPOINT) {
    throw new Error("HYGRAPH_ENDPOINT is not set.");
  }
  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Properties {
        properties {
          bedrooms
          description
          images {
            fileName
            url
          }
          location {
            latitude
            longitude
          }
          name
          rentalPrice
          slug
          id
        }
      }
      `,
    }),
  });
  const json = await response.json();
  return json.data.properties;
};

const Home = async () => {
  const properties = await getProperties();
  console.log("properties :>> ", properties);
  return (
    <>
      <Navbar />
      <SearchBar />
      <main>
        <article>
          <Map />
        </article>
        <article className="listings">
          <h2>Rental Listings</h2>
          <div className="cards-container">
            {properties.map((property) => (
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
    </>
  );
};

export default Home;
