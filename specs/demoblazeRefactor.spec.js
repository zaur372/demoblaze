import chai from 'chai';
import {run, stop} from '../lib/browser';
import app from '../framework/pages';
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
        await app().Main().login(page, 'demo', 'demo');
        const welcomeText = await app().AllElements().getWelcome(page);
        assert.strictEqual(welcomeText, 'Welcome demo', 'Имя пользователя не равно demo' );
    });

    it('Выполнить выход из профиля демо пользователя', async () => {
        await app().Main().login(page, 'demo', 'demo');
        await app().Main().logout(page);
        const LogInText = await app().AllElements().getLogIn(page);
        assert.strictEqual(LogInText, 'Log in', 'Выход не выполнен' );
    });

    it('Проверить переход на домашнюю страницу', async () => {
        await app().Main().clickProductIphone(page);
        await app().Main().clickHome(page);
        const nextPageText = await app().AllElements().getNext(page);
        assert.strictEqual(nextPageText, 'Next', 'Переход на домашнюю страницу не выполнен' );
    });

    it('Проверить переход на следующую страницу товаров', async () => {
        await app().Main().clickButtonNext(page);
        const previousText = await app().AllElements().getPrevious(page);
        assert.strictEqual(previousText, 'Previous', 'Переход на следующую страницу товаров не выполнен' );
    });

    it('Просмотреть корзину', async () => {
        await app().Main().clickCart(page);
        const placeOrderText = await app().AllElements().getOrder(page);
        assert.strictEqual(placeOrderText, 'Place Order', 'Переход на вкладку Cart не выполнен' );
    });

    it('Добавить товар в корзину', async () => {
        await app().Main().clickProductHtc(page);
        await app().Product().clickAdd(page);
        await app().Main().clickCart(page);
        const totalHtc = await app().AllElements().getTotal(page);
        assert.strictEqual(totalHtc, '700', 'Цена телефона не равна 700' ); 
    }); 

    it('Удалить товар из корзины', async () => {
        await app().Main().clickProductHtc(page);
        await app().Product().clickAdd(page);
        await app().Main().clickCart(page);
        const totalHtc = await app().AllElements().getTotal(page);
        assert.strictEqual(totalHtc, '700', 'Цена телефона не равна 700' )
        await app().Cart().clickDelete(page);
        const totalHtc2 = await app().AllElements().getTotalHtc(page);
        assert.notStrictEqual(totalHtc2, '700', 'Цена не изменилась' ) 
    });
});