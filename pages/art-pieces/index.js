import ArtPieces from "@/components/ArtPieces/ArtPieces.jsx";
import Navigation from "@/components/Navigation/Navigation";

export default function SpotlightPage({ piecesData }) {
  return (
    <div>
      <header>
        <h1>Art Gallery App!</h1>
        <Navigation />
      </header>
      <ArtPieces pieces={piecesData} />
    </div>
  );
}
