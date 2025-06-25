import { beforeEach, describe } from "node:test";
import { Homepage } from "../models/HomePage.js";
import { AddTodoModal } from "../models/AddTodoModal.js";
import test, { expect, Page } from "@playwright/test";
import { add } from "date-fns";

describe("User", () => {
  // todo: add beforeEach hook to navigate to homepage and click on add task button

  test.skip("should be able to add a new TODO item", async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    //todo: fix it in the POM
    homepage.addTaskButtonWithinHomepage;

    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    homepage.validateAddedTask("Buy a bike");
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
    const todoItem = page.locator("p.todoItem_todoText__j68oh");
    await expect(todoItem).toHaveClass(/todoItem_todoText--completed/);
  });
});
