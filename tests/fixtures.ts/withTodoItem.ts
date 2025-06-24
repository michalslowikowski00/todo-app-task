import { test as base } from "@playwright/test";
import { Homepage } from "../../models/HomePage";
import { AddTodoModal } from "../../models/AddTodoModal";

export const test = base.extend<{ withOneTodoItem: void }>({
  withOneTodoItem: async ({ page }, use) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage;

    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    await use();
  },
});
