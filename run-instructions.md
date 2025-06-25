# Running Tests

To run the tests for this project using [Playwright](https://playwright.dev/), follow these steps:

1. **Clone the repository**  
   Clone the project repository:

   ```bash
   git clone https://github.com/michalslowikowski00/https://github.com/michalslowikowski00/
   cd todo-app-task
   ```

2. **Install dependencies**  
    Make sure you have all dependencies installed:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Install Playwright browsers**  
   Playwright requires browser binaries. Install them with:

   ```bash
   npm init playwright@latest
   ```

   In case of any issues go [Playwright](https://playwright.dev/docs/intro#installing-playwright)

4. **Run tests**  
   Use the following command to execute the Playwright test suite:

   ```bash
   cd todo-app-task
   npx playwright test
   ```

   or

   ```bash
   cd todo-app-task
   yarn playwright test
   ```

5. **View test results**  
   The results will be displayed in your terminal. For more detailed output, you can use:
   ```bash
   npx playwright test --reporter=list
   ```
   or open the HTML report after running tests:
   ```bash
   npx playwright show-report
   ```

## Additional Notes

- Ensure you are in the project root directory before running the commands.
- If you encounter issues, try deleting `node_modules` via `rm -rf node_modules` and reinstalling dependencies.
- Refer to the [Playwright documentation](https://playwright.dev/docs/intro) for advanced usage and configuration.
