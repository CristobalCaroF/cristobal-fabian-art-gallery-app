import React from "react";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavoritesPage({
  piecesData,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
  const favorites = piecesData.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );

  return (
    <div>
      <h2>Your favorite Art Pieces:</h2>
      <ArtPieces
        pieces={favorites}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        isFavorite={isFavorite}
      />
    </div>
  );
}
