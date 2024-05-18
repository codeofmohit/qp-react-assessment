import { it, expect, describe } from "vitest";
import { render as rtlRender, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AddTasks from "../../components/AddTasks";
import { Provider } from "react-redux";
import store from "../../store/store";

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("AddTasks", () => {
  it("should have a button with add item", () => {
    render(<AddTasks />);
    const button = screen.getByText(/Add item/i);
    expect(button).toBeInTheDocument();
  });
});
