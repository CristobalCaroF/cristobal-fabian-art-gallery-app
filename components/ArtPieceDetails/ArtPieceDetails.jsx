import React from "react";
import { useRouter } from "next/router";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  image: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  info: {
    marginBottom: "10px",
  },
  buttonWrapper: {
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#FFF8E3",
    color: "black",
    border: "1px solid #000",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    outline: "none",
  },
};

export default function ArtPieceDetails({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
}) {
  console.log("piecesData: ", pieces);
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);
  const pieceIsFavorite = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === piece.slug
  );
  const pieceSlug = piece.slug;
  const pieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === pieceSlug
  );
  const pieceComments = pieceInfo?.comments ? pieceInfo.comments : [];
  console.log("INFO: ", pieceComments);

  const { isFavorite } = pieceIsFavorite
    ? pieceIsFavorite
    : { isFavorite: false };

  return (
    <>
      <div style={styles.container}>
        <img
          alt={piece.title}
          src={piece.imageSource}
          style={{ ...styles.image, width: 500 }}
        ></img>
        <h2 style={styles.title}>{piece.name}</h2>
        <h4 style={styles.info}>Artist: {piece.artist}</h4>
        <h4 style={styles.info}>Year: {piece.year}</h4>
        <h4 style={styles.info}>Genre: {piece.genre}</h4>
        <FavoriteButton
          slug={slug}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        ></FavoriteButton>
      </div>
      <CommentForm onSubmitComment={onSubmitComment} slug={piece.slug} />
      <Comments comments={pieceComments} />
      <div style={styles.buttonWrapper}>
        <button
          type="button"
          style={styles.button}
          onClick={() => router.back()}
        >
          Click here to go back
        </button>
      </div>
    </>
  );
}
