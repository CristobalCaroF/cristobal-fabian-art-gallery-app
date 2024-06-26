import Spotlight from "@/components/Spotlight/Spotlight";

export default function SpotlightPage({
  piecesData,
  onToggleFavorite,
  artPiecesInfo,
  isFavorite,
}) {
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
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        slug={randomArtPiece.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
