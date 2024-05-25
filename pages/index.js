import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({ piecesData }) {
  console.log("piecesData: ", piecesData);
  function getRandomArtPiece(piecesArray) {
    const randomIndex = Math.floor(Math.random() * piecesArray.length);
    const randomObject = piecesArray[randomIndex];
    return randomObject;
  }
  const randomArtPiece = getRandomArtPiece(piecesData);
  console.log("random piece: ", randomArtPiece);

  return (
    <div>
      <header>
        <h1>Art Gallery App!</h1>
      </header>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
    </div>
  );
}
