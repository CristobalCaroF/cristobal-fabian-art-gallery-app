import Link from "next/link";
import React from "react";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <img alt={title} src={image} style={{ width: 500 }}></img>
      </Link>
      <h3>{title}</h3>
      <h4>{artist}</h4>
    </div>
  );
}
