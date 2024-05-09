import ImageCard from "../../components/ImageCard";
import Link from "next/link";
import dotenv from "dotenv";
import { query } from "express";
import Navbar from "@/app/components/Navbar";
dotenv.config();

const getProperty = async (slug) => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
  if (!HYGRAPH_ENDPOINT) {
    throw new Error("HYGRAPH_ENDPOINT is not set.");
  }
  try {
    const response = await fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Property ($slug: String) {
            property(where: {slug: $slug})
            {
              id,
              name,
              description,
              rentalPrice,
              parking,
              pool,
              petFriendly,
              inUnitWasherDryer,
              elevator,
              bedrooms,
              images{
                id,
                url,
                fileName
              }
              managingBroker{
                name,
                phoneNumber
              }
            }}`,

        variables: {
          slug: slug,
        },
      }),
    });
    if (!response.ok) {
    }
    const data = await response.json();
    console.log("data :>> ", data);

    if (!data) {
      return null;
    }
    return data.data.property;
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const Property = async ({ params }) => {
  console.log("params :>> ", params.slug);
  const property = await getProperty(params.slug);
  if (property === null) {
  }
  return (
    <>
      <Navbar />
      <div className="property">
        <div className="property-image-container">
          {property.images.map((image) => (
            <ImageCard
              key={image.id}
              url={image.url}
              fileName={image.fileName}
              width={500}
              height={300}
            />
          ))}
        </div>
        <div className="property-info-container">
          <h1>{property.name}</h1>
          <h2>
            <span>{property.bedrooms} Bedrooms</span>
            <br />
            <br />
            <span>Price: ${property.rentalPrice} /month</span>{" "}
          </h2>
          <br />
          <h2>Overview</h2>
          <p>{property.description}</p>
          <br />
          <h2>Amenities: </h2>
          <ul>
            {property.parking && <li>Private Parking</li>}
            {property.pool && <li>Pool</li>}
            {property.petFriendly && <li>Pet Friendly</li>}
            {property.elevator && <li>Elevator</li>}
            {property.inUnitWasherDryer && <li>In-unit Washer-Dryer</li>}
          </ul>
          <br />
          <h3>Licenced Brokerage</h3>
          <p>Managing Broker: {property.managingBroker.name}</p>
          <p>Phonbe Number: {property.managingBroker.phoneNumber}</p>
          <br />
          <Link href={"/"}>
            <button>Back to Home Page</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Property;
