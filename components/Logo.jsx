import Image from "next/image";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" width={150} height={150} />
    </div>
  );
};

export default Logo;
