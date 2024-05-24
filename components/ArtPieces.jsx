import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug} style={{ listStyleType: "none" }}>
          <ArtPiecePreview
            title={piece.name}
            artist={piece.artist}
            image={piece.imageSource}
          />
        </li>
      ))}
    </ul>
  );
}
