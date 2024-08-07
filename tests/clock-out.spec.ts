import { test, expect } from "@playwright/test";
import { goToLiveAttendance, skip } from "./utils";

test("Clock Out", async ({ page }) => {
  if (skip()) return;
  await goToLiveAttendance(page);

  await page.getByRole('button', { name: 'Clock Out' }).click();
  await expect(page.getByText("Successfully clock out")).toBeVisible();
});
