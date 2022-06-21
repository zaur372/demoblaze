const usernameField = "#loginusername";
const passwordField = "#loginpassword";
const authButton = "#login2";
const loginButton ="[onclick='logIn()']";
const logOutButton ="#logout2";
const home = "#nava";
const nextPageButton = ".pagination li:nth-child(2)";
const cart = "#cartur";
const iphone = ".card >[href='prod.html?idp_=5']";
const htc = "[src='imgs/HTC_M9.jpg']";

const MainPage ={
    login: async (page, username, password) => {
        await page.click(authButton);
        await page.click(usernameField); 
        await page.fill(usernameField, username);
        await page.click(passwordField);
        await page.fill(passwordField, password);
        await page.click(loginButton);
    },
    logout: async (page) => {
        await page.click(logOutButton);
    },
    clickButtonNext: async (page) => {
        await page.click(nextPageButton);
    },
    clickProductIphone: async (page) => {
        await page.click(iphone)
    },
    clickProductHtc: async (page) => {
        await page.click(htc)
    },
    clickHome: async (page) => {
        await page.click(home);
    },
    clickCart: async (page) => {
        await page.click(cart);
    }
}

export default MainPage;