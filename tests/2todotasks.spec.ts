import { test, expect } from '@playwright/test';
import MakeText from "../libs/text"

test.describe('TEST WEBSITE TO DO LIST', () => {
  const Todo1 = MakeText(5)
  const Todo2 = MakeText(5)
  test('To-do Tasks: Empty', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.getByRole('link', { name: 'To-Do Tasks' })).toBeVisible();
    await expect(page.getByText('Delete')).toHaveCount(0);
  });
  test('To-do Tasks: Delete 1 item', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo1);
    await page.getByRole('button', { name: 'add' }).click();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.getByRole('link', { name: 'To-Do Tasks' })).toBeVisible();
    await expect(page.getByText(Todo1)).toBeVisible();
    await page.getByRole('button', { name: 'Delete' }).click();
    await expect(page.getByText(Todo1)).toHaveCount(0);
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByText('Delete')).toHaveCount(0);
  });
  test('To-do Tasks: Delete >1 item', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo1);
    await page.getByRole('button', { name: 'add' }).click();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo2);
    await page.getByRole('button', { name: 'add' }).click();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.getByRole('link', { name: 'To-Do Tasks' })).toBeVisible();
    await expect(page.getByText(Todo1)).toBeVisible();
    await expect(page.getByText(Todo2)).toBeVisible();
    await page.locator('li').filter({ hasText: Todo1 + 'Delete' }).getByRole('button').click();
    await page.getByRole('button', { name: 'Delete' }).click();
    await expect(page.getByText(Todo1)).toHaveCount(0);
    await expect(page.getByText(Todo2)).toHaveCount(0);
  });
  test('To-do Tasks: Complete 1 item', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo1);
    await page.getByRole('button', { name: 'add' }).click();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.getByRole('link', { name: 'To-Do Tasks' })).toBeVisible();
    await expect(page.getByText(Todo1)).toBeVisible();
    await page.getByText(Todo1).click();
    //await page.waitForTimeout(2000);
    //await expect(page.getByText(Todo1)).toHaveCount(0);
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByText('done' + Todo1)).toBeVisible();
  });
  test('To-do Tasks: Complete >1 item', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo1);
    await page.getByRole('button', { name: 'add' }).click();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo2);
    await page.getByRole('button', { name: 'add' }).click();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.getByRole('link', { name: 'To-Do Tasks' })).toBeVisible();
    await expect(page.getByText(Todo1)).toBeVisible();
    await expect(page.getByText(Todo2)).toBeVisible();
    await page.getByText(Todo1).click();
    await page.getByText(Todo2).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByText('done' + Todo1)).toBeVisible();
    await expect(page.getByText('done' + Todo2)).toBeVisible();
    //await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    //await expect(page.getByText(Todo1)).toHaveCount(0);
    //await expect(page.getByText(Todo2)).toHaveCount(0);
  });
  test('To-do Tasks: Delete 1 item and Complete 1 item', async ({ page }) => {
    await page.goto('https://abhigyank.github.io/To-Do-List/');
    await expect(page.getByRole('heading', { name: 'To Do List' })).toBeVisible();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo1);
    await page.getByRole('button', { name: 'add' }).click();
    await page.locator('#new-task').click();
    await page.locator('#new-task').fill(Todo2);
    await page.getByRole('button', { name: 'add' }).click();
    await page.getByRole('link', { name: 'To-Do Tasks' }).click();
    await expect(page.getByRole('link', { name: 'To-Do Tasks' })).toBeVisible();
    await expect(page.getByText(Todo1)).toBeVisible();
    await expect(page.getByText(Todo2)).toBeVisible();
    await page.locator('li').filter({ hasText: Todo1 + 'Delete' }).getByRole('button').click();
    await page.getByText(Todo2).click();
    await expect(page.getByText(Todo1)).toHaveCount(0);
    //await expect(page.getByText(Todo2)).toHaveCount(0);
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByText('done' + Todo2)).toBeVisible();
  });
});


