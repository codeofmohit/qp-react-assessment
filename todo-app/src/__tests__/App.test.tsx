/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { ThemeContext } from "../theme/themeContext";

test("renders app with initial light theme", () => {
  render(
    <ThemeContext.Provider
      value={{ currentTheme: "light", toggleCurrentTheme: () => {} }}
    >
      <App />
    </ThemeContext.Provider>
  );

  // Get the provider element
  const provider = screen.getByRole("provider");

  expect(
    provider.querySelector("[data-testid='theme-value']")
  )?.toHaveTextContent(/light/i);
});
