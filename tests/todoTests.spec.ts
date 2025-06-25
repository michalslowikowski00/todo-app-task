import { beforeEach, describe } from "node:test";
import { Homepage } from "../models/HomePage.js";
import { AddTodoModal } from "../models/AddTodoModal.js";
import test, { expect, Page } from "@playwright/test";
import { add } from "date-fns";

describe("User", () => {
  // todo: add beforeEach hook to navigate to homepage and click on add task button

  test("should be able to add a new TODO item", async ({ page }) => {
    // const homepage = new Homepage(page);
    // await homepage.goto();
    // //todo: fix it in the POM
    // homepage.addTaskButtonWithinHomepage;

    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage;

    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    await addTodoModal.addTaskButtonWithinModal.click();

    // const addTodoModal = new AddTodoModal(page);
    // await addTodoModal.addTask("Buy a bike");
    const todoItem = page.getByTestId("todo-Buy a bike");
    await expect(todoItem).toBeVisible();
  });

  test("should be able to mark TODO as completed", async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage;

    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    await addTodoModal.addTaskButtonWithinModal.click();

    const checkButton = page.getByTestId("check-button");
    checkButton.click();
    const todoItem = page.getByTestId("todo-Buy a bike");
    await expect(todoItem).toHaveClass(/todoItem_todoText--completed/);
  });

  test("should be able delete a TODO item", async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage;

    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    await addTodoModal.addTaskButtonWithinModal.click();

    const deleteButton = page.getByTestId("delete-button");
    await deleteButton.click();

    const todoItem = page.getByTestId("todo-Buy a bike");
    await expect(todoItem).not.toBeVisible();
  });
});
