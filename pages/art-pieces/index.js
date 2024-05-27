import ArtPieces from "@/components/ArtPieces/ArtPieces.jsx";

export default function SpotlightPage({ piecesData }) {
  return (
    <div>
      <ArtPieces pieces={piecesData} />
    </div>
  );
}
