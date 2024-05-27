import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({ piecesData }) {
  return (
    <div>
      <ArtPieceDetails pieces={piecesData} />
    </div>
  );
}
