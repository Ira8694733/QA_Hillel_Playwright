//const { test, expect } = require("playwright/test");
import { test, expect } from '@playwright/test';
test.describe('First test', () => {
    //show the screenshot assertion
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('First negative test', async ({ page }) => {
        const signInButton = page.locator('.header_signin', { hasText: 'Sign In' });
        await signInButton.click();
        const modalSignIn = page.locator('div.modal-dialog');
        const emailInput = modalSignIn.locator('input#signinEmail');
        const passwordInput = modalSignIn.locator('input#signinPassword');
        const signInButtonModal = modalSignIn.locator('.btn-primary');

        await emailInput.fill('aqa-randomString@test.com@com');
        await passwordInput.fill('123Q456w');
        await expect(signInButtonModal).toBeDisabled();
        await expect(modalSignIn.locator('.invalid-feedback')).toHaveText('Email is incorrect');
        await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        await expect(emailInput).toHaveScreenshot('invalid-email-input.png', {
            maxDiffPixelRatio: 0.2
        });
    })
});