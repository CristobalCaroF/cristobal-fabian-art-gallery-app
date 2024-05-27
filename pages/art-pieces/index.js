import ArtPieces from "@/components/ArtPieces/ArtPieces.jsx";

export default function SpotlightPage({
  piecesData,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
  return (
    <div>
      <ArtPieces
        pieces={piecesData}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        isFavorite={isFavorite}
      />
    </div>
  );
}
