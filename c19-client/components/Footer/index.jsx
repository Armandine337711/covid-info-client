import Separator from "../common/Separator";
import Logo from "../Logo";
import ExternalLink from "./ExternalLink";
import InternalLinks from "./InternalLinks";

const Footer = () => {
  return (
    <>
      <Separator />
      <div className="container-fluid d-flex flex-column flex-sm-row align-items-center justify-content-between justify-content-md-around my-4 mx-auto">
        <Logo />
        <div className="d-flex flex-column flex-md-row">
          <InternalLinks />
          <ExternalLink />
        </div>
      </div>
    </>
  );
};

export default Footer;
