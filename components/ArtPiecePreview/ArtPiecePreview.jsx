import Link from "next/link";
import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px 8px 8px 8px",
  objectFit: "cover",
};

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <img alt={title} src={image} style={imageStyle}></img>
      </Link>
      <h3>{title}</h3>
      <h4>{artist}</h4>
      <FavoriteButton
        slug={slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      ></FavoriteButton>
    </div>
  );
}
