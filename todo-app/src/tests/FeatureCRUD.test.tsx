import store from "../store/store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/vitest";
import { it, expect, describe, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import Home from "../components/Home";
import { mockTaskString, mockTaskStringUpdated } from "../mocks/taskMock";

const renderHomeWithStore = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

describe("Home", () => {
  // clean ups
  // beforeAll(() => {
  //   console.log("testing before all");
  // });

  // beforeEach(() => {
  //   console.log("testing before each");
  // });

  // afterAll(() => {
  //   console.log("testing after all");
  // });

  // afterEach(() => {
  //   console.log("testing after each");
  // });

  it("should add mock test string to task list when clicked on add item", () => {
    render(renderHomeWithStore()); // arrange : rendered home component : app level component
    // act : stimulating adding item in input and button click behaviour
    const addItemBtn = screen.getByRole("button", { name: "Add item" });
    const taskInput = screen.getByTestId("taskInput");
    fireEvent.change(taskInput, { target: { value: `${mockTaskString}` } });
    fireEvent.click(addItemBtn);
    // assert : task list item textContent should match the given mock task string
    const taskStringPara = screen.getByTestId("taskString").textContent;
    expect(taskStringPara).toBe(`${mockTaskString}`);
  });

  it("should update mock test string text when clicked on update button", () => {
    render(renderHomeWithStore()); // arrange : rendered home component : app level component
    // act : edit btn
    const editBtn = screen.getByRole("button", { name: "edit" });
    // mocking updation behavior as done in ui via window promt
    vi.spyOn(window, "prompt").mockImplementationOnce(() => {
      // Simulate user input for editing the task
      return `${mockTaskStringUpdated}`;
    });
    // firing edit button click
    fireEvent.click(editBtn);
    // assert : task list item textContent should match the given updated mock task string
    const taskStringPara = screen.getByTestId("taskString").textContent;
    expect(taskStringPara).toBe(`${mockTaskStringUpdated}`);
    vi.restoreAllMocks(); // Restore mocks after each test
  });

  it("should delete mock test string text when clicked on delete button", () => {
    render(renderHomeWithStore()); // arrange : rendered home component : app level component
    // already exisiting taskItem : updated one cause of last test case
    const taskItem = screen.getByTestId("taskString");
    // deleteBtn
    const deleteBtn = screen.getByRole("button", { name: "delete" });
    // simulating delete button fire
    fireEvent.click(deleteBtn);
    // expecting task deleted hence not to be in document
    expect(taskItem).not.toBeInTheDocument();
  });

  it("should delete mock test string text when clicked on clear all tasks button", () => {
    render(renderHomeWithStore());
    // adding mock test string again - as was deleted by last test case
    const addItemBtn = screen.getByRole("button", { name: "Add item" });
    const taskInput = screen.getByTestId("taskInput");
    fireEvent.change(taskInput, { target: { value: `${mockTaskString}` } });
    fireEvent.click(addItemBtn);
    // task item para
    const taskItem = screen.getByTestId("taskString");
    // clear all items btn
    const clearAllItemsBtn = screen.getByTestId("clearAllTasksBtn");
    // simulating btn fire
    fireEvent.click(clearAllItemsBtn);
    // expecting task deleted hence not to be in document
    expect(taskItem).not.toBeInTheDocument();
  });
});
