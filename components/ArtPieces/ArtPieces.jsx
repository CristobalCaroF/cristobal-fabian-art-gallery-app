import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        const hasInfo = artPiecesInfo.find(
          (artPieceInfo) => artPieceInfo.slug === piece.slug
        );
        const { isFavorite } = hasInfo ? hasInfo : { isFavorite: false };
        return (
          <li key={piece.slug} style={{ listStyleType: "none" }}>
            <ArtPiecePreview
              title={piece.name}
              artist={piece.artist}
              image={piece.imageSource}
              slug={piece.slug}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isFavorite}
              artPiecesInfo={artPiecesInfo}
            />
          </li>
        );
      })}
    </ul>
  );
}
