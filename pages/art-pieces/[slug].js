import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import CommentForm from "@/components/CommentForm/CommentForm";

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
      <CommentForm onSubmitComment={onSubmitComment} />
    </div>
  );
}
