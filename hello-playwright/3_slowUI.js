const { firefox } = require('playwright');

(async () => {
  // To see the browser UI & to slow down execution.
  const browser = await firefox.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto('https://www.okcupid.com/');
  await page.screenshot({ path: `okCupidLandingPage.png` });
  await browser.close();
})();
