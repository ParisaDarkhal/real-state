import logo from "./images/logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <Image src={logo} alt="Logo" width={80} />
    </nav>
  );
};

export default Navbar;
