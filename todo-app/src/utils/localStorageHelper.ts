import { taskType } from "../types";

// setting list in LS as [], if not already there
export const loadFromLs = () => {
  const list = window.localStorage.getItem("list");
  if (!list) {
    window.localStorage.setItem("list", JSON.stringify([]));
    return [];
  } else {
    return JSON.parse(list);
  }
};

// adding task to ls
export const addToLs = (task: taskType) => {
  const list = window.localStorage.getItem("list");
  if (!list) {
    window.localStorage.setItem("list", JSON.stringify([]));
  } else {
    const parsedList = JSON.parse(list);
    parsedList.push(task);
    window.localStorage.setItem("list", JSON.stringify(parsedList));
  }
};

// update markDone in localStorage
export const updateMarkDoneLs = (id: string, flag: boolean) => {
  const list = window.localStorage.getItem("list");
  if (!list) {
    window.localStorage.setItem("list", JSON.stringify([]));
  } else {
    const parsedList = JSON.parse(list);
    const currentItem = parsedList.find((each: taskType) => {
      if (each) {
        return each.id === id;
      }
    });
    currentItem.isCompleted = flag;
    const updatedItem = currentItem;
    const indexOfCurrentItem = parsedList.indexOf(currentItem);
    parsedList.splice(indexOfCurrentItem, 1, updatedItem);
    window.localStorage.setItem("list", JSON.stringify(parsedList));
  }
};

// update task-text in localStorage
export const updateItemTextLs = (id: string, itemText: string) => {
  const list = window.localStorage.getItem("list");
  if (!list) {
    window.localStorage.setItem("list", JSON.stringify([]));
  } else {
    const parsedList = JSON.parse(list);
    const currentItem = parsedList.find((each: taskType) => {
      if (each) {
        return each.id === id;
      }
    });
    currentItem.task = itemText;
    const updatedItem = currentItem;
    const indexOfCurrentItem = parsedList.indexOf(currentItem);
    parsedList.splice(indexOfCurrentItem, 1, updatedItem);
    window.localStorage.setItem("list", JSON.stringify(parsedList));
  }
};

// deleting task in localStorage
export const deleteItemInLs = (id: string) => {
  const list = window.localStorage.getItem("list");
  if (!list) {
    window.localStorage.setItem("list", JSON.stringify([]));
  } else {
    const parsedList = JSON.parse(list);
    const currentItem = parsedList.find((each: taskType) => {
      if (each) {
        return each.id === id;
      }
    });
    const indexOfCurrentItem = parsedList.indexOf(currentItem);
    parsedList.splice(indexOfCurrentItem, 1);
    window.localStorage.setItem("list", JSON.stringify(parsedList));
  }
};

// clearing localStorage list
export const clearLs = () => {
  window.localStorage.setItem("list", JSON.stringify([]));
};
