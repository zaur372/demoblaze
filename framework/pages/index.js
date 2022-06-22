import MainPage from '../pages/mainPage';
import ProductPage from '../pages/productPage';
import CartPage from '../pages/cartPage';
import AllElements from '../elements/allElements';

const app = () => ({
    Product: () => ({...ProductPage}),
    Cart: () => ({...CartPage}),
    Main: () => ({...MainPage}),
    AllElements: () => ({...AllElements}),
})

export default app;