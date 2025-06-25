import { expect, type Locator, type Page } from "@playwright/test";

export class Homepage {
  readonly page: Page;
  readonly addTaskButton: Locator;
  readonly checkButton: Locator;
  readonly deleteButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addTaskButton = page.getByRole("button", {
      name: /add task/i,
    });
    this.checkButton = page.getByTestId("check-button");
    this.deleteButton = page.getByTestId("delete-button");
    this.errorMessage = page.getByText("Please enter a title");
  }

  async goto() {
    await this.page.goto("http://localhost:3000");
  }
}
