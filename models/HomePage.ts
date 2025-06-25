import { expect, type Locator, type Page } from "@playwright/test";

export class Homepage {
  readonly page: Page;
  readonly addTaskButtonWithinHomepage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addTaskButtonWithinHomepage = page
      .getByRole("button", {
        name: /add task/i,
      })
      .click();
  }

  async goto() {
    await this.page.goto("http://localhost:3000");
  }

  async validateAddedTask(taskName: string) {
    await expect(this.page.getByText(taskName)).toBeVisible();
  }

  async markTaskAsCompleted(taskName: string) {
    await this.page.getByText(taskName).click();
  }

  async validateTaskCompleted(taskName: string) {
    await expect(this.page.getByText(taskName)).toHaveClass(/todoItem_todoText--completed__gEH+W/);
  }
}
