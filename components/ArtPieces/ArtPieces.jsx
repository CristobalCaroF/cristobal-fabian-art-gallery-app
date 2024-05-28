import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "300px",
  textAlign: "center",
};
const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  padding: "0",
  margin: "0",
};

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul style={listStyle}>
      {pieces.map((piece) => {
        const hasInfo = artPiecesInfo.find(
          (artPieceInfo) => artPieceInfo.slug === piece.slug
        );
        const { isFavorite } = hasInfo ? hasInfo : { isFavorite: false };
        return (
          <div style={cardStyle}>
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
          </div>
        );
      })}
    </ul>
  );
}
