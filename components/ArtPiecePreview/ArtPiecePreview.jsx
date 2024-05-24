import React from "react";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img alt={title} src={image} style={{ width: 500 }}></img>
      <h2>{title}</h2>
      <h3>{artist}</h3>
    </div>
  );
}
