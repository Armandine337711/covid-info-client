import Link from "next/link";

const InternalLinks = () => {
  return (
    <div className="my-2 mx-2 fs-6">
      <ul>
        <li>
          <Link href="/">Plan du site</Link>
        </li>
        <li>
          <Link href="/">Mentions Légales</Link>
        </li>
        <li>
          <Link href="/">Données personnelles et cookie</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default InternalLinks;
