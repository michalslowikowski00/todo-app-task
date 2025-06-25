import { Homepage } from "../models/HomePage.js";
import { AddTodoModal } from "../models/AddTodoModal.js";
import { expect } from "@playwright/test";
import { test } from "./fixture.js";
import { describe } from "node:test";

describe("As a user I", () => {
  test("should be able to add a new TODO item", async ({ homepage, modal }) => {
    const todoItem = homepage.getByTestId("todo-Buy a bike");
    await expect(todoItem).toBeVisible();
  });

  test("should be able to mark TODO as completed", async ({
    homepage,
    modal,
  }) => {
    // when
    const checkButton = new Homepage(homepage).checkButton;
    await checkButton.click();

    // then
    const todoItem = homepage.getByTestId("todo-Buy a bike");
    await expect(todoItem).toHaveClass(/todoItem_todoText--completed/i);
  });

  test("should be able delete a TODO item", async ({ homepage, modal }) => {
    // when
    const deleteButton = new Homepage(homepage).deleteButton;
    await deleteButton.click();

    // then
    const todoItem = homepage.getByTestId("todo-Buy a bike");
    await expect(todoItem).not.toBeVisible();
  });

  test("should be able to see TODO item after reload the page", async ({
    homepage,
    modal,
  }) => {
    // when
    await homepage.reload();

    // then
    const todoItem = homepage.getByTestId("todo-Buy a bike");
    await expect(todoItem).toBeVisible();
  });

  test("should not be able to add empty TODO item", async ({ page }) => {
    // given
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButton.click();

    // when
    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("");
    addTodoModal.addTaskButton.click();

    // then
    const errorMessage = new Homepage(page).errorMessage;
    await expect(errorMessage).toBeVisible();
  });
});
