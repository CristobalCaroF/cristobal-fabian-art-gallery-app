// import { render, screen } from "@testing-library/react";
// import ArtPieceDetails from "./ArtPieceDetails";

// const piece = [
//   {
//     id: 1,
//     name: "Mona Lisa",
//     artist: "Leonardo da Vinci",
//     year: "1503–1506",
//     description: "Famous portrait by da Vinci.",
//     genre: "Classic",
//     slug: "mona-lisa",
//     imageSource:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
//   },
// ];

// test("renders the imag in details page", () => {
//   render(<ArtPieceDetails pieces={piece} />);
//   const img = screen.getByAltText(piece.name);
//   expect(img.src).toContain(
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
//   );
// });

//   test("renders the title", () => {
//     render(
//       <ArtPiecePreview
//         image={piece.image}
//         title={piece.title}
//         artist={piece.artist}
//       />
//     );
//     const pieceTitle = screen.getByText("Mona Lisa");
//     expect(pieceTitle).toBeInTheDocument();
//   });

//   test("renders the artist", () => {
//     render(
//       <ArtPiecePreview
//         image={piece.image}
//         title={piece.title}
//         artist={piece.artist}
//       />
//     );
//     const pieceArtist = screen.getByText("Leonardo da Vinci");
//     expect(pieceArtist).toBeInTheDocument();
//   });
