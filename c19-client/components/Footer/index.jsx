import Logo from "../Logo";
import ExternalLink from "./ExternalLink";
import InternalLinks from "./InternalLinks";

const Footer = () => {
  return (
    <div className="container-fluid d-flex justify-content-between justify-content-md-around my-4 mx-auto">
      <Logo />
      <div className="d-flex">
        <InternalLinks />
        <ExternalLink />
      </div>
    </div>
  );
};

export default Footer;
