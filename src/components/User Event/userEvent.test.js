import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserEventComponent from "./userEvent";

test("Name input is visible in the document", () => {
    render(<UserEventComponent />);
    const input = screen.getByLabelText("your name");
    expect(input).toBeVisible();
});

test("Input changes value when writing on it", () => {
    render(<UserEventComponent />);
    const input = screen.getByLabelText("your name");
    userEvent.type(input, "this is my name");
    expect(input).toHaveDisplayValue("this is my name");
});