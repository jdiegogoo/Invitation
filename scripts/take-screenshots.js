const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

const IGNORE = new Set([
    ".git",
    ".github",
    "scripts",
    "node_modules"
]);

(async () => {

    const browser = await chromium.launch({
        headless: true
    });

    for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {

        if (!entry.isDirectory()) continue;

        if (IGNORE.has(entry.name)) continue;

        const folder = path.join(ROOT, entry.name);

        if (!fs.existsSync(path.join(folder, "index.html")))
            continue;

        console.log(`📸 Generando preview: ${entry.name}`);

        const page = await browser.newPage({
            viewport: {
                width: 1280,
                height: 720
            }
        });

        try {

            await page.goto(`http://127.0.0.1:8080/${entry.name}/`, {
                waitUntil: "networkidle",
                timeout: 30000
            });

            // Espera un poco por si existen animaciones
            await page.waitForTimeout(1200);

            await page.screenshot({
                path: path.join(folder, "preview.webp"),
                type: "webp",
                quality: 85,
                fullPage: false
            });

        } catch (err) {

            console.error(`❌ Error en ${entry.name}`);

            console.error(err.message);

        }

        await page.close();

    }

    await browser.close();

    console.log("\n✅ Screenshots terminados");

})();