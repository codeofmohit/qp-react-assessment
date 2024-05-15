/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import AddTasks from "../components/AddTasks";
import { render, screen } from "@testing-library/react";

describe("AddTasks", () => {
  it("should have a button with text add item", () => {
    render(<AddTasks />);
    const button = screen.getByRole("button", { name: /Add item/i });
    expect(button).toBeInTheDocument();
  });
});
