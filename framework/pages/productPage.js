import loc from '../../locators.json';

const ProductPage ={
    clickAdd: async (page) => {
        await page.click(loc.addToCart)
    }
}

export default ProductPage;