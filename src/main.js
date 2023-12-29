import puppeteer from "puppeteer-core";

async function run() {
  let browser;
  let exepath = "C:/Program Files/Google/Chrome/Application/chrome.exe"
  try {
    browser = await puppeteer.launch({
      headless: true,
      executablePath: exepath,
    });

    const page = await browser.newPage();

    await page.setDefaultNavigationTimeout(2 * 60 * 1000);

    await page.goto("https://aternos.org/servers/");

    const usernameSelector = ".username";
    const passwordSelector = ".password";

    const username = "ServantTheBot";
    const password = "U%&H,v4zi8UX6%Z";

    await page.waitForSelector(usernameSelector);

    await page.type(usernameSelector, username);
    await page.type(passwordSelector, password);
    await page.click(".login-button");
    await page.waitForNavigation()
    console.log(`Logged in as ${username}`);

  } catch (error) {
    console.log(error);
  } finally {
    await browser?.close();
  }
}

run();
