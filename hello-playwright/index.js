const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage('http://whatsmyuseragent.org/');
    await page.screenshot({ path: `okcupidLandingPage_${browserType}.png` });
    await browser.close();
  }
})();
