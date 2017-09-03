'use strict';

const puppeteer = require('puppeteer');
const assert = require('assert');

let browser;
let page;

const headless = process.env.PUPPETEER_HEADLESS === 'false' ? false : true;

const ATOZ_URL = 'https://www.bbc.co.uk/bbcone/a-z';

describe('Google Chrome Puppeteer - iPlayer Channel A to Z', () => {

  before(async () => {
    browser = await puppeteer.launch({
      headless
    });
    page = await browser.newPage();
  });

  beforeEach(async () => {
    await page.goto(ATOZ_URL);
  });

  after(() => {
    browser.close();
  });

  it('has a header with the page title', async () => {
    const pageHeaderElement = await page.$('.page-header h1');
    const pageHeaderText = await pageHeaderElement.evaluate(el => el.textContent);

    assert.equal(pageHeaderText, 'BBC One A-Z');
  });

  it('has the first page selected and not clickable', async () => {
    const firstPagination = await page.$('.pagination__item--page .button');
    const firstPaginationClasses = await firstPagination.evaluate(el => Object.values(el.classList));
    const firstPaginationTagName = await firstPagination.evaluate(el => el.tagName);

    assert(firstPaginationClasses.includes('button--active'));
    assert.equal(firstPaginationTagName, 'SPAN');
  });

  it('has the next element disabled when on the last page', async () => {
    const lastPageButton = await page.$('.pagination .pagination__item:nth-last-child(2) a');
    await lastPageButton.click();

    const nextPageTag = await page.$eval('.pagination__item--page .button', el => el.tagName);

    assert.equal(nextPageTag, 'SPAN');
  });

});
