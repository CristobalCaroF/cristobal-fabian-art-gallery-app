import React from "react";
import Link from "next/link";

const ulStyles = {
  listStyleType: "none",
  display: "flex",
  justifyContent: "center",
  padding: 0,
};

const liStyles = {
  margin: "0 10px",
};

export default function Navigation() {
  return (
    <ul style={ulStyles}>
      <li style={liStyles}>
        <Link href="/">Spotlight</Link>
      </li>
      <li style={liStyles}>
        <Link href="/art-pieces">Pieces</Link>
      </li>
      <li style={liStyles}>
        <Link href="/Favorites">Favorites</Link>
      </li>
    </ul>
  );
}
