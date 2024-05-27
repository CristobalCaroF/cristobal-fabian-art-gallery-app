import React from "react";
import Link from "next/link";

export default function Spotlight({ image, artist, slug }) {
  return (
    <div>
      <h2>Spotlight Piece of Art</h2>
      <img
        alt={"Spotlight Piece of Art"}
        src={image}
        style={{ width: 500 }}
      ></img>
      <h3>{artist}</h3>
      <Link href={`/art-pieces/${slug}`}>More details</Link>
    </div>
  );
}
