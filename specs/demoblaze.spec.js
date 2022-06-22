/* import chai from 'chai';
import {run, stop} from '../lib/browser';
import loc from '../locators.json';
const assert = chai.assert;

describe ('Магазин demoblaze', () => {
    let page;

    beforeEach(async () => {
        page = await run('https://www.demoblaze.com/');
    });
    afterEach(async () => {
        await stop();
    });

    it('Авторизоваться демо пользователем', async () => {
        await page.click(loc.authButton);
        await page.click(loc.usernameField); 
        await page.fill(loc.usernameField, 'demo');
        await page.click(loc.passwordField);
        await page.fill(loc.passwordField, 'demo');
        await page.click(loc.loginButton);
        await page.waitForSelector(loc.welcome);
        const welcomeText = await page.textContent(loc.welcome);
        assert.strictEqual(welcomeText, 'Welcome demo', 'Имя пользователя не равно demo' );
    });

    it('Выполнить выход из профиля демо пользователя', async () => {
        await page.click(loc.authButton);
        await page.click(loc.usernameField); 
        await page.fill(loc.usernameField, 'demo');
        await page.click(loc.passwordField);
        await page.fill(loc.passwordField, 'demo');
        await page.click(loc.loginButton);
        await page.click(loc.logOutButton);
        await page.waitForSelector(loc.LogIn);
        const LogInText = await page.textContent(loc.LogIn);
        assert.strictEqual(LogInText, 'Log in', 'Выход не выполнен' );
    });

    it('Проверить переход на домашнюю страницу', async () => {
        await page.click(loc.iphone);
        await page.click(loc.home);
        await page.waitForSelector(loc.nextPageButton);
        const nextPageText = await page.textContent(loc.nextPageButton);
        assert.strictEqual(nextPageText, 'Next', 'Переход на домашнюю страницу не выполнен' );
    });

    it('Проверить переход на следующую страницу товаров', async () => {
        await page.click(loc.nextPageButton);
        await page.waitForSelector(loc.previousPageButton);
        const previousText = await page.textContent(loc.previousPageButton);
        assert.strictEqual(previousText, 'Previous', 'Переход на следующую страницу товаров не выполнен' );
    });

    it('Просмотреть корзину', async () => {
        await page.click(loc.cart);
        await page.waitForSelector(loc.placeOrder);
        const placeOrderText = await page.textContent(loc.placeOrder);
        assert.strictEqual(placeOrderText, 'Place Order', 'Переход на вкладку Cart не выполнен' );
    });

    it('Добавить товар в корзину', async () => {
        await page.click(loc.htc);
        await page.click(loc.addToCart); 
        await page.click(loc.cart);
        await page.waitForSelector(loc.total);
        const totalHtc = await page.textContent(loc.total);
        assert.strictEqual(totalHtc, '700', 'Цена телефона не равна 700' ); 
    }); 

    it('Удалить товар из корзины', async () => {
        await page.click(loc.htc);
        await page.click(loc.addToCart); 
        await page.click(loc.cart);
        await page.waitForSelector(loc.total);
        const totalHtc = await page.textContent(loc.total);
        assert.strictEqual(totalHtc, '700', 'Цена телефона не равна 700' )
        await page.click(loc.delete);
        await page.waitForSelector(loc.delete, { state: 'hidden' });
        const totalHtc2 = await page.textContent(loc.total);
        assert.notStrictEqual(totalHtc2, '700', 'Цена не изменилась' ) 
    });
}); */