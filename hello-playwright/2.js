const { firefox } = require('playwright');

// Connecting

(async () => {
  const browser = await firefox.launch();
  // HTTP Authentication :  FAILED !!!
  const context = await browser.newContext({
    httpCredentials: {
      username: 'screen.objects@gmail.com',
      password: '4Asdf!No*',
    },
  });
  const page = await context.newPage();
  //  const page = await browser.newPage();
  await page.goto('https://www.okcupid.com/home/');
  await page.screenshot({ path: `okCupidLandingPage.png` });
  await browser.close();
})();
