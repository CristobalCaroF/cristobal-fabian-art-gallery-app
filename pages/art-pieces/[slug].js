import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  piecesData,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
}) {
  return (
    <div>
      <ArtPieceDetails
        pieces={piecesData}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        onSubmitComment={onSubmitComment}
      />
    </div>
  );
}
