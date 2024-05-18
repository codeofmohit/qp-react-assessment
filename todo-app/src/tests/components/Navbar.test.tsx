import { it, expect, describe } from "vitest";
import { render as rtlRender, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import "@testing-library/jest-dom/vitest";
import { ThemeContext } from "../../theme/themeContext";
import Theme from "../../theme/Theme";

const render = (component: any, theme?: any) =>
  rtlRender(
    <ThemeContext.Provider
      value={{ currentTheme: theme || "light", toggleCurrentTheme: () => {} }}
    >
      <Theme>{component}</Theme>
    </ThemeContext.Provider>
  );

describe("Navbar", () => {
  it("should have a logo with text App Logo", () => {
    render(<Navbar />);
    const text = screen.getByText(/Todo App/i);
    expect(text).toBeInTheDocument();
  });
  it("should have a button with text Dark Mode when in dark mode", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: /Dark Mode/i });
    expect(button).toBeInTheDocument();
  });
  it("should have a button with text Light Mode when in light mode", () => {
    render(<Navbar />, "dark");
    const button = screen.getByRole("button", { name: /Light Mode/i });
    expect(button).toBeInTheDocument();
  });
});
