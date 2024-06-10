import { test, expect } from '@playwright/test';
const fs = require('fs');

test('tokopedia', async ({ page }) => {
  await page.goto('https://www.tokopedia.com/');
  await page.getByPlaceholder('Cari di Tokopedia').click();
  await page.getByPlaceholder('Cari di Tokopedia').fill('samsung official');
  await page.getByRole('link', { name: 'autocomplete_item autocomplete iconSamsung Official Store autocomplete sub icon' }).click();
  await page.getByPlaceholder('Cari barang di sini').click();
  await page.getByPlaceholder('Cari barang di sini').fill('samsung s21 fe');
  await page.getByPlaceholder('Cari barang di sini').press('Enter');
  await page.getByRole('link', { name: 'Samsung Galaxy S21 FE 5G 8/256GB status label' }).click();
  await page.waitForTimeout(5000)

  //take screenshot
  const folderPath = './screenshots';

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  // Ambil screenshot dan simpan dalam file di folder terpisah
  await page.screenshot({ path: folderPath + '/samsungs21fe.png' });

});