import ImageCard from "../../components/ImageCard";
import Link from "next/link";
import "dotenv.config";
import { query } from "express";

const getProperty = async () => {
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
      query: `query Property {
                properties(limit: 1) {
                    slug
                    id
                    bedrooms
                    rentalPrice
                  images {
                      url
                    fileName
                  }
                  location {
                    latitude
                    longitude
                  }
                                 
                }
              }
              `,
    }),
  });
};

const Property = () => {
  return (
    <div>
      <p>I am a Property.</p>
    </div>
  );
};

export default Property;
