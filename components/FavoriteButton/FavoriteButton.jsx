import React from "react";
import StarFilled from "./star-filled.svg";
import Star from "./star.svg";

const buttonStyle = {
  border: "none",
  backgroundColor: "transparent",
  padding: 0,
  cursor: "pointer",
  outline: "none",
  borderRadius: "50%",
};

export default function FavoriteButton({ onToggleFavorite, slug, isFavorite }) {
  return (
    <button
      style={buttonStyle}
      className="favorite-button"
      aria-label="favorite"
      onClick={() => onToggleFavorite(slug)}
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
