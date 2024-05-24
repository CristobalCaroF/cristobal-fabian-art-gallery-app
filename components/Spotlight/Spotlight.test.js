import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

const piece = {
  id: 1,
  title: "Mona Lisa",
  artist: "Leonardo da Vinci",
  year: "1503–1506",
  description: "Famous portrait by da Vinci.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
};

test("renders the image", () => {
  render(<Spotlight image={piece.image} artist={piece.artist} />);
  const img = screen.getByAltText("Spotlight Piece of Art");
  expect(img.src).toContain(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  );
});

test("renders the artist", () => {
  render(<Spotlight image={piece.image} artist={piece.artist} />);
  const pieceArtist = screen.getByText("Leonardo da Vinci");
  expect(pieceArtist).toBeInTheDocument();
});
