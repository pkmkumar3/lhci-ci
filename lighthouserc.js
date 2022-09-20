{
  "ci": {
    "collect": {
      "chromePath": false,
      "numberOfRuns": 1,
      "puppeteerScript": "./lighthouse/pre-collect.js",
      "url": ""
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.90 }],
        "categories:accessibility": ["error", { "minScore": 0.90 }],
        "categories:best-practices": ["error", { "minScore": 0.90 }],
        "categories:seo": ["error", { "minScore": 0.90 }]
      }
    },
    "upload": {
      "target": "lhci",
      "token": "8d6a1879-7e63-48ad-8b35-b4799761d31c",
      "serverBaseUrl": "http://20.237.121.213/"
    }
  }
}
