const puppeteer = require("puppeteer");
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
(async () => {
  const url = "http://contractorsinsurancereview.com/ExampleForm/";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await sleep(5000);
  fill_inputs(page);
  await sleep(5000);
  Screen_shot(page);
  await sleep(5000);
  Change_S_Field(page);
  await sleep(5000);
  button_click(page);
})();
// fill fields function
const fill_inputs = async (page) => {
  try {
    await page.focus("#name");
    await page.keyboard.type("jaber");
    await sleep(3000);
    await page.focus("#email");
    await page.keyboard.type("srks662@gmail.com ");
    await sleep(3000);
    await page.focus("#phone");
    await page.keyboard.type("0527723014");
    await sleep(3000);
    await page.focus("#company");
    await page.keyboard.type("google");
    // Screen_shot(page);
  } catch (e) {
    console.log("error fill one or more input fileds", e);
  }
};
const Screen_shot = async (page) => {
  try {
    await page.screenshot({
      path: "./screenshot.png",

      fullPage: true,
    });
  } catch (e) {
    console.log("there was a problem screen shot", e);
  }
};
const Change_S_Field = async (page) => {
  try {
    await page.evaluate(() => {
      document.querySelector("select option:nth-child(3)").selected = true;
    });
  } catch (e) {
    console.log("erro change select value", e);
  }
};
const button_click = async (page) => {
  try {
    await page.click('button[class="primary button"]');
    console.log("Reached thank you page");
  } catch (e) {
    console.log("there was a problem clicking the button", e);
  }
};
