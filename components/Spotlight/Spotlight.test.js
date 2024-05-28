import React from "react";
import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

jest.mock("../FavoriteButton/FavoriteButton", () => {
  return jest.fn(() => <div data-testid="mock-favorite-button"></div>);
});

describe("Spotlight component", () => {
  const mockArtPiecesInfo = [
    {
      slug: "art-piece-1",
      isFavorite: true,
    },
    {
      slug: "art-piece-2",
      isFavorite: false,
    },
  ];

  const mockToggleFavorite = jest.fn();

  const mockProps = {
    image: "path/to/image.jpg",
    artist: "John Doe",
    slug: "art-piece-1",
    onToggleFavorite: mockToggleFavorite,
    artPiecesInfo: mockArtPiecesInfo,
  };

  it("displays the art piece image", () => {
    render(<Spotlight {...mockProps} />);
    const imageElement = screen.getByAltText("Spotlight Piece of Art");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "path/to/image.jpg");
  });

  it("displays the art piece artist", () => {
    render(<Spotlight {...mockProps} />);
    const artistElement = screen.getByText("John Doe");
    expect(artistElement).toBeInTheDocument();
  });
});
