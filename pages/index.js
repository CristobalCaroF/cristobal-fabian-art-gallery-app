import ArtPieces from "@/components/ArtPieces/ArtPieces.jsx";
import Spotlight from "@/components/Spotlight/Spotlight";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  console.log("data: ", data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function getRandomArtPiece(piecesArray) {
    const randomIndex = Math.floor(Math.random() * piecesArray.length);
    const randomObject = piecesArray[randomIndex];
    return randomObject;
  }
  const randomArtPiece = getRandomArtPiece(data);

  return (
    <div>
      <header>
        <h1>Art Gallery App!</h1>
      </header>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
      <ArtPieces pieces={data} />
    </div>
  );
}
