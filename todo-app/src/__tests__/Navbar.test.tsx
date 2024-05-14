/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("Navbar", () => {
  it("should have a text called Todo App", () => {
    render(<Navbar />);
    const ele = screen.getByText("Todo App");
    expect(ele).toBeInTheDocument();
  });
  it('clicking dark mode button changes text to "Light Mode"', async () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: /Light Mode/i });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await waitFor(
      () => {
        expect(button).toHaveTextContent(/Dark Mode/i);
      },
      { timeout: 4000 }
    );
  });
});
