import ArtPieces from "@/components/ArtPieces/ArtPieces.jsx";

export default function SpotlightPage({ piecesData }) {
  return (
    <div>
      <header>
        <h1>Art Gallery App!</h1>
      </header>
      <ArtPieces pieces={piecesData} />
    </div>
  );
}
