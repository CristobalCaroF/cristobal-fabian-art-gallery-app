import React from "react";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <img alt={title} src={image} style={{ width: 500 }}></img>
      <h3>{title}</h3>
      <h4>{artist}</h4>
    </div>
  );
}
