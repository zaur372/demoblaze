const deleteProduct = "#tbodyid a";

const CartPage ={
    clickDelete: async (page) => {
        await page.click(deleteProduct)
    }
}

export default CartPage;