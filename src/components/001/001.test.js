import { render, screen } from "@testing-library/react";
import Component001 from "./001";

test("H1 title renders correctly", () => {
  render(<Component001 />);
  const h1 = screen.getByText("hello world");
  expect(h1).toBeInTheDocument();
});

test("H1 title renders hello world text", () => {
  render(<Component001 />);
  const h1 = screen.getByText("hello world");
  expect(h1).toHaveTextContent("hello world");
});

test("H2 title renders correctly", () => {
  render(<Component001 />);
  const h2 = screen.getByText("I am Alex");
  expect(h2).not.toBeEmptyDOMElement();
});
