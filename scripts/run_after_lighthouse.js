const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = path.resolve(__dirname, '../chrome/linux-155.0.8059.84/chrome-linux64/chrome');
const OUTPUT_DIR = path.resolve(__dirname, '../screenshots/after');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}
const REPORT_PATH = path.join(OUTPUT_DIR, 'lighthouse_mobile_after.json');

const cmd = `CHROME_PATH="${CHROME_PATH}" bunx lighthouse http://localhost:8080/ \
  --output=json \
  --output-path="${REPORT_PATH}" \
  --no-enable-error-reporting \
  --chrome-flags="--headless --no-sandbox --disable-setuid-sandbox --disable-gpu" \
  --form-factor=mobile \
  --throttling-method=simulate \
  --screenEmulation.mobile=true \
  --screenEmulation.width=390 \
  --screenEmulation.height=844 \
  --screenEmulation.deviceScaleFactor=3 \
  --quiet`;

console.log('Running Lighthouse CLI for Mobile after upgrade...');
try {
  execSync(cmd, { stdio: 'inherit', env: { ...process.env, CHROME_PATH } });
  const raw = fs.readFileSync(REPORT_PATH, 'utf8');
  const report = JSON.parse(raw);
  
  const categories = report.categories;
  const audits = report.audits;
  
  const summary = {
    performance: Math.round((categories.performance?.score || 0) * 100),
    accessibility: Math.round((categories.accessibility?.score || 0) * 100),
    bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
    seo: Math.round((categories.seo?.score || 0) * 100),
    lcp: audits['largest-contentful-paint']?.displayValue,
    cls: audits['cumulative-layout-shift']?.displayValue,
    fcp: audits['first-contentful-paint']?.displayValue,
    tbt: audits['total-blocking-time']?.displayValue,
    speedIndex: audits['speed-index']?.displayValue
  };
  
  console.log('=== AFTER UPGRADE LIGHTHOUSE MOBILE SCORES ===');
  console.log(JSON.stringify(summary, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'after_summary.json'), JSON.stringify(summary, null, 2));
} catch (e) {
  console.error('Lighthouse execution failed:', e);
  process.exit(1);
}
