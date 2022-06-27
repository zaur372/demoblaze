const welcome = "#nameofuser";
const LogIn = "#login2";
const previousPageButton ="#prev2";
const placeOrder = "[data-target='#orderModal']";
const nextPageButton = ".pagination li:nth-child(2)";
const total = "#totalp";
const deleteProduct = "#tbodyid a";

const  AllElements ={
    getWelcome: async (page) => {
        await page.waitForSelector(welcome);
        const welcomeText = await page.textContent(welcome);
        return welcomeText;
    },
    getLogIn: async (page) => {
        await page.waitForSelector(LogIn)
        const LogInText = await page.textContent(LogIn);
        return LogInText;
    },
    getNext: async (page) => {
        await page.waitForSelector(nextPageButton);
        const nextPageText = await page.textContent(nextPageButton);
        return nextPageText;
    },
    getPrevious: async (page) => {
        await page.waitForSelector(previousPageButton);
        const previousText = await page.textContent(previousPageButton);
        return previousText;
    },
    getOrder: async (page) => {
        await page.waitForSelector(placeOrder);
        const placeOrderText = await page.textContent(placeOrder);
        return placeOrderText;
    },
    getTotal: async (page) => {
        await page.waitForSelector(total);
        const totalHtc = await page.textContent(total);
        return totalHtc;
    },
    getTotalHtc: async (page) => {
        await page.waitForSelector(deleteProduct, { state: 'hidden' });
        const totalHtc2 = await page.textContent(total);
        return totalHtc2;
    }
}

export default AllElements;