import React from "react";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

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
    <div>
      <h2>Spotlight Piece of Art</h2>

      <img
        alt={"Spotlight Piece of Art"}
        src={image}
        style={{ width: 500 }}
      ></img>
      <h3>{artist}</h3>
      <FavoriteButton
        slug={slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      ></FavoriteButton>
      <Link href={`/art-pieces/${slug}`}>More details</Link>
    </div>
  );
}
