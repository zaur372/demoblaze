import loc from '../../locators.json';

const CartPage ={
    clickDelete: async (page) => {
        await page.click(loc.delete)
    }
}

export default CartPage;