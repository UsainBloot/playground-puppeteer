'use strict';

const puppeteer = require('puppeteer');

async function screenshot(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: 'screenshot.png'});

  browser.close();
}

screenshot('http://cultofthepartyparrot.com/');
