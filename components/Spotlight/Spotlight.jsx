import React from "react";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#FFF8E3",
};

const imageStyle = {
  width: "30%",
  height: "auto",
  borderRadius: "0 0 0 0",
  objectFit: "cover",
  border: "3px solid #000",
};

export default function Spotlight({
  image,
  artist,
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const hasInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  );
  const { isFavorite } = hasInfo ? hasInfo : { isFavorite: false };
  return (
    <div style={containerStyle}>
      <h2>Spotlight Piece of Art</h2>

      <Link style={containerStyle} href={`/art-pieces/${slug}`}>
        <img
          alt={"Spotlight Piece of Art"}
          src={image}
          style={imageStyle}
        ></img>
      </Link>
      <h3>{artist}</h3>
      <FavoriteButton
        slug={slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      ></FavoriteButton>
    </div>
  );
}
