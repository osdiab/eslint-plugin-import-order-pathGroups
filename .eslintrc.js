module.exports = {
  plugins: [
    "import"
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  rules: {
    "import/order": [
      "warn",
      {
        "pathGroups": [
          {
            "pattern": "@app/**",
            "group": "internal"
          },
          {
            "pattern": "__tests__/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@my.company/**",
            "group": "external",
            "position": "after"
          }
        ],
      }
    ]
  }
}