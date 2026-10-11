import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("documentation has no serious or critical axe violations", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /build interfaces that do not depend on sound/i })).toBeVisible();

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  const blocking = results.violations.filter((violation) =>
    violation.impact === "serious" || violation.impact === "critical"
  );
  expect(blocking).toEqual([]);
});

test("interactive transcript is reachable by keyboard", async ({ page }) => {
  await page.goto("/");
  const transcriptButton = page.getByRole("button", { name: /hide transcript/i });
  await transcriptButton.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: /show transcript/i })).toBeFocused();
});
