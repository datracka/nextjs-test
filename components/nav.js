import Link from "next/link";

export default () => (
  <React.Fragment>
    <ul>
      <li>
        <Link href="/">
          <a>Landing Page</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  </React.Fragment>
);
