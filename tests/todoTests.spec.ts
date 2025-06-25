import { beforeEach, describe } from "node:test";
import { Homepage } from "../models/HomePage.js";
import { AddTodoModal } from "../models/AddTodoModal.js";
import test, { expect, Page } from "@playwright/test";
import { add } from "date-fns";

describe("User", () => {
  // todo: add beforeEach hook to navigate to homepage and click on add task button

  test("should be able to add a new TODO item", async ({ page }) => {
    // given
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage;

    // when
    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    await addTodoModal.addTaskButtonWithinModal.click();

    // then
    const todoItem = page.getByTestId("todo-Buy a bike");
    await expect(todoItem).toBeVisible();
  });

  test("should be able to mark TODO as completed", async ({ page }) => {
    // given
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage;

    // when
    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    await addTodoModal.addTaskButtonWithinModal.click();

    // and
    const checkButton = page.getByTestId("check-button");
    checkButton.click();

    // then
    const todoItem = page.getByTestId("todo-Buy a bike");
    await expect(todoItem).toHaveClass(/todoItem_todoText--completed/);
  });

  test("should be able delete a TODO item", async ({ page }) => {
    // given
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage;

    // when
    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    await addTodoModal.addTaskButtonWithinModal.click();

    // and
    const deleteButton = page.getByTestId("delete-button");
    await deleteButton.click();

    // then
    const todoItem = page.getByTestId("todo-Buy a bike");
    await expect(todoItem).not.toBeVisible();
  });
});
