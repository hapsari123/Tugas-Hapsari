import { test, expect } from '@playwright/test';
const fs = require('fs');

test('instagram', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByLabel('Phone number, username, or').click();
  await page.getByLabel('Phone number, username, or').fill('fraginaalodiabilqis');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('penjagahatiku15!');
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.getByRole('button', { name: 'Not Now' }).click();
  await page.getByRole('link', { name: 'Search Search' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('alditaher');
  await page.getByRole('link', { name: 'alditaher.official\'s profile picture alditaher.official Verified aldi taher' }).click();
  await page.getByRole('link', { name: 'BISMILLAH Hellow medan sampai' }).click();
  await page.waitForTimeout(5000)
  
  //take screenshot
  const folderPath = './screenshots';

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  // Ambil screenshot dan simpan dalam file di folder terpisah
  await page.screenshot({ path: folderPath + '/alditaher.png' });
  
});