# SensaraTests
# Playwright + TypeScript End-to-End Testing Setup for Sensara Connect application
This project uses [Playwright](https://playwright.dev/) with **TypeScript** for end-to-end testing.  
Playwright supports Chromium, Firefox, and WebKit browsers, providing fast and reliable testing across browsers.


## Technology Stack
- **Playwright**: A Node.js library for end-to-end testing across multiple browsers (Chromium, Firefox, WebKit). Playwright is known for its speed and reliability in automated testing.
- **TypeScript**: A strongly typed superset of JavaScript, providing better tooling and type safety during development.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. Used to run Playwright tests and manage dependencies with npm
- **Playwright test**: A test runner built by the Playwright team, designed to run tests efficiently across multiple browsers with built-in support for various test features like retries, test reporting, and screenshots.

## Installation and Setup

Follow these steps to set up the project and run the tests:

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**


### Step-by-Step Installation

1. Clone the repository: git clone "https://github.com/sensara-eu/sensaraTests.git"
2. Navigate to the Project Directory: cd "your repo"
3. Install playwright, npm, node.js

### verify installation
- npx playwright --version
- node -v
- npm -v


### How to Execute the Tests
1. via VS Code Terminal for test environment : test_env="test" npx playwright test
2. via vs code TErminal for Acceptance environment : test_env="acceptance" npx playwright test

### Github pipeline
  Added playwright.yaml file, so the code will be execued in both test and acceptance environment in github pipeline when you push the code to git.

## 📊 Open Allure Report (Local)

After downloading the Allure report artifact from GitHub Actions, follow these steps to view it locally.
### Prerequisites
Allure artifact downloaded (e.g. allure-report-acceptance.zip or allure-report-test.zip)

### Steps
- Open a terminal and navigate to your Downloads folder
- Create a folder and unzip the artifact
    mkdir allure-report-acceptance
    unzip allure-report-acceptance.zip -d allure-report-acceptance
- Navigate into the report directory
    cd allure-report-acceptance
- Start a local web server
    python3 -m http.server 8080
- Open the report in your browser
     http://localhost:8080

## Important Notes
* Do not open index.html by double-clicking it
* Allure reports must be served over HTTP
* If port 8080 is already in use, try another port or close the terminal in use.
