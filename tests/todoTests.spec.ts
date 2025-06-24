import { test, expect } from "@playwright/test";
import { beforeEach, describe } from "node:test";
import { Homepage } from "../models/HomePage.js";
import { AddTodoModal } from "../models/AddTodoModal.js";
import { add } from "date-fns";
import { ta } from "date-fns/locale";

describe("User", () => 

  test("should be able to add a new TODO item", async ({ page }) => {
    const homepage = new Homepage(page);
    await homepage.goto();
    homepage.addTaskButtonWithinHomepage; // fix it

    const addTodoModal = new AddTodoModal(page);
    await addTodoModal.addTask("Buy a bike");
    homepage.validateAddedTask("Buy a bike");
  });
});
