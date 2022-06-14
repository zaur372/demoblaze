import chai from 'chai';
import {run, stop} from '../lib/browser';
import loc from '../locators.json';
const assert = chai.assert;
import app from '../framework/pages';

describe ('Магазин demoblaze', () => {
    let page;

    beforeEach(async () => {
        page = await run('https://www.demoblaze.com/');
    });
    afterEach(async () => {
        await stop();
    });

    it('Авторизоваться демо пользователем', async () => {
        await app().Main().login(page, 'demo', 'demo');
        await page.waitForSelector(loc.welcome);
        const welcomeText = await page.textContent(loc.welcome);
        assert.strictEqual(welcomeText, 'Welcome demo', 'Имя пользователя не равно demo' );
    });

    it('Выполнить выход из профиля демо пользователя', async () => {
        await app().Main().login(page, 'demo', 'demo');
        await app().Main().logout(page);
        await page.waitForSelector(loc.LogIn);
        const LogInText = await page.textContent(loc.LogIn);
        assert.strictEqual(LogInText, 'Log in', 'Выход не выполнен' );
    });

    it('Проверить переход на домашнюю страницу', async () => {
        await app().Main().clickProductIphone(page);
        await app().Main().clickHome(page);
        await page.waitForSelector(loc.nextPageButton);
        const nextPageText = await page.textContent(loc.nextPageButton);
        assert.strictEqual(nextPageText, 'Next', 'Переход на домашнюю страницу не выполнен' );
    });

    it('Проверить переход на следующую страницу товаров', async () => {
        await app().Main().clickButtonNext(page);
        await page.waitForSelector(loc.previousPageButton);
        const previousText = await page.textContent(loc.previousPageButton);
        assert.strictEqual(previousText, 'Previous', 'Переход на следующую страницу товаров не выполнен' );
    });

    it('Просмотреть корзину', async () => {
        await app().Main().clickCart(page);
        await page.waitForSelector(loc.placeOrder);
        const placeOrderText = await page.textContent(loc.placeOrder);
        assert.strictEqual(placeOrderText, 'Place Order', 'Переход на вкладку Cart не выполнен' );
    });

    it('Добавить товар в корзину', async () => {
        await app().Main().clickProductHtc(page);
        await app().Product().clickAdd(page);
        await app().Main().clickCart(page);
        await page.waitForSelector(loc.total);
        const totalHtc = await page.textContent(loc.total);
        assert.strictEqual(totalHtc, '700', 'Цена телефона не равна 700' ); 
    }); 

    it('Удалить товар из корзины', async () => {
        await app().Main().clickProductHtc(page);
        await app().Product().clickAdd(page);
        await app().Main().clickCart(page);
        await page.waitForSelector(loc.total);
        const totalHtc = await page.textContent(loc.total);
        assert.strictEqual(totalHtc, '700', 'Цена телефона не равна 700' )
        await app().Cart().clickDelete(page);
        await page.waitForSelector(loc.delete, { state: 'hidden' });
        const totalHtc2 = await page.textContent(loc.total);
        assert.notStrictEqual(totalHtc2, '700', 'Цена не изменилась' ) 
    });
});