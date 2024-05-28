import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";
import { useState } from "react";

const pieces = [
  {
    id: 1,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "1503–1506",
    description: "Famous portrait by da Vinci.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
  },
  {
    id: 2,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    description: "Iconic painting of a starry night sky.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: 3,
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: "1495–1498",
    description: "Famous religious artwork.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_%28Leonardo_Da_Vinci%29_1.jpg/640px-The_Last_Supper_%28Leonardo_Da_Vinci%29_1.jpg",
  },
];

test("renders a list of art pieces", () => {
  render(<ArtPieces pieces={pieces} />);
  const ul = screen.getByRole("list");
  expect(ul).toBeInTheDocument();
});
