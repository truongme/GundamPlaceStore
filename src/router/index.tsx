import Cart from "../views/Cart";
import Home from "../views/Home";
import Login from "../views/Login";
import ProductDetail from "../views/ProductDetail";
import ProductSearch from "../views/ProductSearch";
import User from "../views/User";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/cart", element: <Cart /> },
    { path: "/user/:id", element: <User /> },
    { path: "/gundam/:id", element: <ProductDetail idProduct={5}/> },
    { path: "/discover", element: <ProductSearch /> },
];

export default routes;