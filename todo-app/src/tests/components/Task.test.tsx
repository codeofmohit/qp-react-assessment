import store from "../../store/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/vitest";
import { it, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import Task from "../../components/Task";
import { taskMockObj } from "../../mocks/taskMock";

describe("Task", () => {
  it("should have element with edit and delete button when passed with mock data", () => {
    render(
      <Provider store={store}>
        <Task task={taskMockObj} />
      </Provider>
    ); // arrange
    const editBtn = screen.getByRole("button", { name: /edit/i }); // act
    const deleteBtn = screen.getByRole("button", { name: /delete/i }); // act
    expect(editBtn).toBeInTheDocument(); // assert
    expect(deleteBtn).toBeInTheDocument(); // assert
  });
  it("should have element with mock-data text (task string text) when passe with mock data", () => {
    render(
      <Provider store={store}>
        <Task task={taskMockObj} />
      </Provider>
    ); // arrange
    const taskText = screen.getByText(`${taskMockObj.task}`); // act
    expect(taskText).toBeInTheDocument(); // assert
  });
});
