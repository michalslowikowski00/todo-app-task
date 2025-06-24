import test, { expect } from "@playwright/test";
import { describe } from "node:test";
import { Homepage } from "../models/HomePage.js";
import { AddTodoModal } from "../models/AddTodoModal.js";
// import { test } from "./fixtures.ts/withTodoItem.js";

describe("User", () => {
  test("should be able to add a new TODO item", async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage; // fix it

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
    // await homepage.validateAddedTask("Buy a bike");
    // await homepage.markTaskAsCompleted("Buy a bike");
    // await homepage.validateTaskCompleted("Buy a bike");
  });
});
