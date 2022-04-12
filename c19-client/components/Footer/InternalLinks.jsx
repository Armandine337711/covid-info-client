import Link from "next/link";

const InternalLinks = () => {
  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item">
          <Link href="/">Plan du site</Link>
        </li>
        <li class="list-group-item">
          <Link href="/">Mentions Légales</Link>
        </li>
        <li class="list-group-item">
          <Link href="/">Données personnelles et cookie</Link>
        </li>
        <li class="list-group-item">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default InternalLinks;
