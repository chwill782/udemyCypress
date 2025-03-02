const fs = require("fs");
const path = require("path");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // Custom task to attach screenshots
      on("task", {
        attachScreenshot(screenshotFileName) {
          const screenshotPath = path.join(__dirname, "cypress/screenshots", screenshotFileName);

          if (fs.existsSync(screenshotPath)) {
            return screenshotPath;
          } else {
            return null;
          }
        },
      });

      return config;
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
      embeddedScreenshots: true,
      charts: true,
    },
    video: true,  // Enable video recording
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
};
