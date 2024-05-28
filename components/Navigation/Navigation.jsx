import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <ul style={{ listStyleType: "none" }}>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">Pieces</Link>
      </li>
      <li>
        <Link href="/Favorites">Favorites</Link>
      </li>
    </ul>
  );
}
