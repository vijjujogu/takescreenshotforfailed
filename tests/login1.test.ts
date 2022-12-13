import {chromium, test} from "@playwright/test"
test("Login test", async ({page},testInfo) => {
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    await page.goto("https://www.saucedemo.com/")
    await page.type("id=user-name","standard_user");
    await page.type("id=password","secret_sauce")
    await page.click("id=login-button")
  
 
})

test.afterEach(async ({ page }, testInfo) => {
      if (testInfo.status !== 'passed') {
        const buffer = await page.screenshot();
        
        await testInfo.attach('downloaded', { body:buffer,contentType: 'image/png' });
     
      }
    });