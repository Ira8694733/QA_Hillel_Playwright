// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  // testMatch: 'tests/pom/**.spec.js',
  fullyParallel: false, // ATTENTION

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  //grep: /@smoke/,  
  //grepInvert: /@smoke/,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", {open: 'never'}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: "https://qauto2.forstudy.space/",
    httpCredentials: {
      username: 'guest',
      password: 'welcome2qauto',
    },
    viewport: { width: 1920, height: 1080 },
    screenshot: 'only-on-failure',
    video: 'on', 
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 500,
    }
  },
  // globalSetup: './globalSetup',
  // globalTeardown: './globalTeardown',
  timeout: 45000,
  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'staging',
    //   use: { ...devices['Desktop Chrome'],
    //     baseURL: "https://playwright.dev",
    //     httpCredentials: {
    //       username: 'guest',
    //       password: 'welcome2auto',
    //     },
    //   viewport: { width: 1920, height: 1080}, 
    //    },
    //    dependencies: ['setup']
    // },
    {
      name: 'hillel-garage',
      use: { ...devices['Desktop Chrome'],
        baseURL: "https://qauto2.forstudy.space/",
        httpCredentials: {
          username: 'guest',
          password: 'welcome2qauto',
        },
      viewport: { width: 1920, height: 1080},
      //testMatch: '**/tests/hillel-garage/**/*.spec.js', 
       },
       //dependencies: ['setup']
    },

    // {
    //   name: 'prod',
    //   use: { ...devices['Desktop Firefox'],
    //     baseURL: "https://quato.heillel.com",
    //     httpCredentials: {
    //       username: 'guest',
    //       password: 'welcome2auto',
    //     },
    //     retries:2,
    //    },
    //    dependencies: ['setup']
    // },

    // {
    //   name: 'setup',
    //   testMatch: 'tests/setup/*.setup.js',
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

