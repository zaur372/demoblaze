import MainPage from '../pages/mainPage';
import ProductPage from '../pages/productPage';
import CartPage from '../pages/cartPage';

const app = () => ({
    Product: () => ({...ProductPage}),
    Cart: () => ({...CartPage}),
    Main: () => ({...MainPage}),
})

export default app;