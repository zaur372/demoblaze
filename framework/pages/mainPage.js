import loc from '../../locators.json';

const MainPage ={
    login: async (page, username, password) => {
        await page.click(loc.authButton);
        await page.click(loc.usernameField); 
        await page.fill(loc.usernameField, username);
        await page.click(loc.passwordField);
        await page.fill(loc.passwordField, password);
        await page.click(loc.loginButton);
    },
    logout: async (page) => {
        await page.click(loc.logOutButton);
    },
    clickButtonNext: async (page) => {
        await page.click(loc.nextPageButton);
    },
    clickProductIphone: async (page) => {
        await page.click(loc.iphone)
    },
    clickProductHtc: async (page) => {
        await page.click(loc.htc)
    },
    clickHome: async (page) => {
        await page.click(loc.home);
    },
    clickCart: async (page) => {
        await page.click(loc.cart);
    }
}

export default MainPage;