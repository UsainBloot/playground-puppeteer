'use strict';

const puppeteer = require('puppeteer');

async function screenshotGithubAvatar(user = 'usainbloot') {
  const url = `https://github.com/${user}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({
    clip: {
      x: 20,
      y: 96,
      width: 229,
      height: 230
    },
    type: 'png',
    path: 'avatar.png'
  });

  browser.close();
}

const ARG_USER = process.env.GITHUB_USER;

screenshotGithubAvatar(ARG_USER);
