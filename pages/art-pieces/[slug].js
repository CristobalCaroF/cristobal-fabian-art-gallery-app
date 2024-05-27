import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  piecesData,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
  return (
    <div>
      <ArtPieceDetails
        pieces={piecesData}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
