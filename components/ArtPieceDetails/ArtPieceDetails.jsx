import React from "react";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
  console.log("piecesData: ", pieces);
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((piece) => piece.slug === slug);

  return (
    <>
      <div>
        <img
          alt={piece.title}
          src={piece.imageSource}
          style={{ width: 500 }}
        ></img>
        <h2>{piece.name}</h2>
        <h4>Artist: {piece.artist}</h4>
        <h4>Year: {piece.year}</h4>
        <h4>Genre: {piece.genre}</h4>
        <FavoriteButton
          slug={slug}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        ></FavoriteButton>
      </div>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}
