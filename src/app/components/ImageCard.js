import Image from "next/image";
const ImageCard = ({ url, fileName, width, height }) => {
  return (
    <Image
      className="image"
      src={url}
      alt={fileName}
      width={width}
      height={height}
      priority
    ></Image>
  );
};

export default ImageCard;
