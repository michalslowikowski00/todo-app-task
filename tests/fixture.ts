import { test as base, Page } from "@playwright/test";
import { AddTodoModal } from "../models/AddTodoModal";
import { Homepage } from "../models/HomePage";

type FixturesType = {
  homepage: Page;
  modal: Page;
};

export const test = base.extend<FixturesType>({
  homepage: async ({ page }, use) => {
    await setupHomepage(page);
    await use(page);
  },
  modal: async ({ page }, use) => {
    await setupAddTodoModal(page);
    await use(page);
  },
});

async function setupHomepage(page: Page) {
  const homepage = new Homepage(page);
  await homepage.goto();
  await homepage.addTaskButton.click();
}

async function setupAddTodoModal(page: Page) {
  const addTodoModal = new AddTodoModal(page);
  await addTodoModal.addTask("Buy a bike");
  await addTodoModal.addTaskButton.click();
}
