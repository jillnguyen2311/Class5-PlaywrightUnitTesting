import { test, devices, expect} from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    viewport: {width: 414, height: 896}
})

test.describe("The mobile viewport for iPhone XR", () => {
    test("Testing for colours on iPhone XR", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#colouring');

        const checkingBackgroundColour = await mainContainer.evaluate((e1e) => {
            return window.getComputedStyle(e1e).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(255, 0, 0)");
    })
})