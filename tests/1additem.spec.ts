import { test, expect } from '@playwright/test';
import MakeText from "../libs/text" //import MakeText from "../../../../libs/text"

test.describe('TEST WEBSITE TO DO LIST', () => {
  const Todo1 = MakeText(5)
  test('Add Item: Empty', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Add Item' })).toBeVisible();
    await page.locator('#new-task').click();
    await page.getByRole('button', { name: 'add' }).click();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.getByText('Delete')).toHaveCount(0);
  });
  test('Add Item: <space bar>', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Add Item' })).toBeVisible();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill('   ');
    await page.getByRole('button', { name: 'add' }).click();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.locator('label')).toBeVisible();
  });
  test('Add Item: Text', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Add Item' })).toBeVisible();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo1);
    await page.getByRole('button', { name: 'add' }).click();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.getByText(Todo1)).toBeVisible();
  });
  /*
   test('should mark todo item as completed', async ({ page }) => {
   await page.goto('https://abhigyank.github.io/To-Do-List/');
     await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Add Item' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'To-Do Tasks' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Completed' })).toBeVisible();
     await page.locator('#new-task').click();
     await page.locator('#new-task').fill(Todo1);
     await page.getByRole('button', { name: 'add' }).click();
     await page.getByRole('link', { name: 'To-Do Tasks' }).click();
     await expect(page.getByText(Todo1)).toBeVisible();
     await page.getByRole('button', { name: 'Delete' }).click();
     await page.getByRole('link', { name: 'Add Item' }).click();
     await page.locator('#new-task').click();
     await page.locator('#new-task').fill(Todo2);
     await page.getByRole('button', { name: 'add' }).click();
     await page.getByRole('link', { name: 'To-Do Tasks' }).click();
     await expect(page.getByText(Todo2)).toBeVisible();
     await page.getByText(Todo2).click();
     await page.getByRole('link', { name: 'Completed' }).click();
     await expect(page.getByText('done'+Todo2)).toBeVisible();
     await page.getByRole('button', { name: 'Delete' }).click();
     await page.getByRole('link', { name: 'To-Do Tasks' }).click();
     await page.getByRole('link', { name: 'Add Item' }).click();
     await page.getByRole('link', { name: 'Add Item' }).click();
   });*/
});


