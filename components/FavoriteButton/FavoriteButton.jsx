import React from "react";
import StarFilled from "./star-filled.svg";
import Star from "./star.svg";

export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
  isFavorite,
}) {
  return (
    <button
      className="favorite-button"
      aria-label="favorite"
      onClick={() => onToggleFavorite(slug)}
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
