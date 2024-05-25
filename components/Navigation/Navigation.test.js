import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import Link from "next/link";

test("renders the navigation link spotlight", () => {
  render(<Link href="/">Spotlight</Link>);
  const link = screen.getByText("Spotlight");
  expect(link.href).toContain("/");
});

test("renders the navigation link pieces", () => {
  render(<Link href="/art-pieces">Pieces</Link>);
  const link = screen.getByText("Pieces");
  expect(link.href).toContain("/art-pieces");
});
