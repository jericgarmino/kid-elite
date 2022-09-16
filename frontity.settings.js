const settings = {
  "name": "kid-elite",
  "state": {
    "frontity": {
      "url": "https://kidapp.phwebhero.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Family",
              "/category/family/parents"
            ],
            [
              "Identity",
              "/category/identity/"
            ],
            [
              "Tradition",
              "/category/tradition/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://kidapp.phwebhero.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
