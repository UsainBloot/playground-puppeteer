'use strict';

const puppeteer = require('puppeteer');

async function screenshot(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: 'screenshot.png'});

  browser.close();
}

const ARG_URL = process.env.URL || 'http://cultofthepartyparrot.com/';

screenshot(ARG_URL);
