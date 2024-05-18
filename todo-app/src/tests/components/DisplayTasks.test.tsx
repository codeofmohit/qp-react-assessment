import { it, expect, describe } from "vitest";
import { screen, render as rtlRender } from "@testing-library/react";
import DisplayTasks from "../../components/DisplayTasks";
import store from "../../store/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/vitest";

const render = (component: any) => {
  rtlRender(<Provider store={store}>{component}</Provider>);
};

describe("DisplyTasks", () => {
  it("should check a heading with text Task List if exists", () => {
    render(<DisplayTasks />);
    const heading = screen.getByRole("heading", { name: /Task List/i });
    expect(heading).toBeInTheDocument();
  });

  it("on initial load list should be empty", () => {
    render(<DisplayTasks />);
    const emptyListText = screen.getByText(/List is empty! add some items.../i);
    expect(emptyListText).toBeInTheDocument();
  });
});
