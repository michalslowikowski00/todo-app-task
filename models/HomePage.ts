import { expect, type Locator, type Page } from "@playwright/test";

export class Homepage {
  readonly page: Page;
  readonly addTaskButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addTaskButton = page.getByRole("button", {
      name: /add task/i,
    });
  }

  async goto() {
    await this.page.goto("http://localhost:3000");
  }
}
