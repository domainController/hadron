const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto('https://www.okcupid.com/');
  await page.screenshot({ path: `okCupidLandingPage.png` });
  await browser.close();
})();
