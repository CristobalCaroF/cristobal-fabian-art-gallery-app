import React from "react";

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <h2>Spotlight Piece of Art</h2>
      <img
        alt={"Spotlight Piece of Art"}
        src={image}
        style={{ width: 500 }}
      ></img>
      <h3>{artist}</h3>
    </div>
  );
}
