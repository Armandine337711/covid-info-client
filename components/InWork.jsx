import Image from "next/image";
import imgWork from "../assets/inwork.png";

function InWork() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <h1 className="">Page en construction</h1>
          <h2 className="">Merci de votre compréhension</h2>
          <Image
            src={imgWork}
            alt="image en contruction"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default InWork;
