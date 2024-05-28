import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./ArtPiecePreview";

jest.mock("../FavoriteButton/FavoriteButton", () => {
  return jest.fn(() => null);
});

test("renders image, title, and artist for each art piece", () => {
  const mockArtPiece = {
    artist: "Artist Name",
    image: "art-piece-image.jpg",
    title: "Art Piece Title",
    slug: "art-piece-slug",
  };

  render(
    <ArtPiecePreview
      artist={mockArtPiece.artist}
      image={mockArtPiece.image}
      title={mockArtPiece.title}
      slug={mockArtPiece.slug}
    />
  );

  const image = screen.getByAltText(mockArtPiece.title);
  const artist = screen.getByText(mockArtPiece.artist);
  const title = screen.getByText(mockArtPiece.title);
});
