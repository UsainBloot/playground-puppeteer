# playground-puppeteer
[![Build Status](https://travis-ci.org/UsainBloot/playground-puppeteer.svg?branch=master)](https://travis-ci.org/UsainBloot/playground-puppeteer)

Playground for experimenting with [GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer).
Includes end to end tests for a website and a screenshot tool.

![Puppeteer](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)

## Requirements
* Node 8

## Usage
### Run tests
In headless mode
```
npm run test
```

In full chrome mode
```
npm run test:gui
```

### Screenshot a site
```
URL=http://some.website npm run screenshot
```
