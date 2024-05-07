import Link from "next/link";
const Card = ({ propertyName, slug, rentalPrice, bedrooms, image }) => {
  return (
    <Link href={`/property/${slug}`}>
      <div>{propertyName}</div>
    </Link>
  );
};

export default Card;
