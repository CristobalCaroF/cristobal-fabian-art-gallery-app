import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import Navigation from "../Navigation/Navigation";

test("renders a list of navigation links", () => {
  render(<Navigation />);
  const ul = screen.getByRole("list");
  expect(ul).toBeInTheDocument();
});
