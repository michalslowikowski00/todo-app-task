import { expect, type Locator, type Page } from "@playwright/test";

export class AddTodoModal {
  readonly page: Page;
  readonly header: Locator;
  readonly input: Locator;
  readonly modal: Locator;
  readonly addTaskButtonWithinModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: /add todo/i });
    this.input = page.locator("#title");
    this.modal = page.locator("form");
    this.addTaskButtonWithinModal = this.modal.getByRole("button", {
      name: "Add Task",
    });
  }

  async addTask(title: string) {
    await expect(this.header).toBeVisible();
    await this.input.fill(title);
    await this.addTaskButtonWithinModal.click();
  }
}

//await page.goto("http://localhost:3000");
//await page.getByRole("button", { name: /add task/i }).click();
// await expect(page.getByRole("heading", { name: /add todo/i })).toBeVisible();
// page.locator("#title").fill("Buy a bike");
// await page.locator("form").getByRole("button", { name: "Add Task" }).click();

// await expect(page.getByText("Buy a bike")).toBeVisible();
