import Link from "next/link";
import ImageCard from "./ImageCard";
const Card = ({ propertyName, slug, rentalPrice, bedrooms, image }) => {
  return (
    <Link href={`/property/${slug}`}>
      <div className="card">
        <ImageCard
          url={image.url}
          fileName={image.fileName}
          width={300}
          height={150}
        />
        <div className="text-container">
          <p>{propertyName}</p>
          <h3>${rentalPrice} / month</h3>
          <h3>{bedrooms} bedrooms</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
