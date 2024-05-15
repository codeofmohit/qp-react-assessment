/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import DisplayTasks from "../components/DisplayTasks";
import { render, screen } from "@testing-library/react";

describe("DisplayTasks", () => {
  it("should have a text with text Task List", () => {
    render(<DisplayTasks />);
    const ele = screen.getByText("Task List");
    expect(ele).toBeInTheDocument();
  });
});
