const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = path.resolve(__dirname, '../chrome/linux-155.0.8059.84/chrome-linux64/chrome');
const OUTPUT_DIR = path.resolve(__dirname, '../screenshots/after');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const WIDTHS = [360, 390, 768, 1024, 1440];

async function run() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  for (const width of WIDTHS) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 800, deviceScaleFactor: 1 });
    console.log(`Navigating to http://localhost:8080/ at width ${width}px...`);
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });
    
    // Check horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`Width ${width}px: scrollWidth = ${scrollWidth}, clientWidth = ${clientWidth}`);
    
    const screenshotPath = path.join(OUTPUT_DIR, `screenshot_${width}px.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot to ${screenshotPath}`);
    await page.close();
  }

  await browser.close();
  console.log('Finished capturing after screenshots!');
}

run().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
