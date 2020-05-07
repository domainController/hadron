const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('https://www.okcupid.com/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();
