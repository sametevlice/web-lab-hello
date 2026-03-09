const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir);
    }

    // Define breakpoints
    const breakpoints = [
        { name: 'mobile', width: 375, height: 812 },
        { name: 'tablet', width: 768, height: 1024 },
        { name: 'desktop', width: 1280, height: 800 }
    ];

    await page.goto('http://localhost:5173');

    // Add a small delay for images/fonts to load
    await page.waitForTimeout(1000);

    for (const bp of breakpoints) {
        await page.setViewportSize({ width: bp.width, height: bp.height });

        // Wait for any layout shifts
        await page.waitForTimeout(500);

        await page.screenshot({
            path: path.join(screenshotsDir, `screenshot-${bp.name}.png`),
            fullPage: true
        });
        console.log(`Saved screenshot for ${bp.name} (${bp.width}px)`);
    }

    await browser.close();
    console.log('All screenshots captured successfully!');
})();
