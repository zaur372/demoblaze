const addToCart = ".btn.btn-success";

const ProductPage ={
    clickAdd: async (page) => {
        await page.click(addToCart)
    }
}

export default ProductPage;