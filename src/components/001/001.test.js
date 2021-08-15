import { render, screen} from "@testing-library/react";
import Component001 from "./001";

test("renders hello world", () => {
  render(<Component001 />);
  const title = screen.getByText("hello world");
  expect(title).toBeVisible();
  expect(title).toMatchSnapshot("<h1>hello world</h1>");
  expect(title).not.toBeEmptyDOMElement();
});

test("renders hello world 2", () => {
    render(<Component001 />);
    const title = screen.getByText("I am Alex");
    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
});
