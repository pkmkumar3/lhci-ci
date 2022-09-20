module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:8080'] /* Add configuration here */
        settings: {
            emulatedFormFactor: "mobile",
            chromeFlags: "--no-sandbox",
        },
        numberOfRuns: 2
    },
      },
      upload: {
        target: 'temporary-public-storage', /* Add configuration here */
        "token": "e0e319af-7d58-4f8c-9f75-e85856354ca0",
        "serverBaseUrl": "http://20.237.121.213/"
      },
    },
  };