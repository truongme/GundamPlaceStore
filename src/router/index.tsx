import Cart from "../views/Cart";
import Home from "../views/Home";
import ListProduct from "../views/ListProduct";
import Login from "../views/Login";
import News from "../views/News";
import ProductDetail from "../views/ProductDetail";
import User from "../views/User";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/cart", element: <Cart /> },
    { path: "/news", element: <News /> },
    { path: "/collection", element: <ListProduct /> },
    { path: "/user/:id", element: <User /> },
    { path: "/gundam/:id", element: <ProductDetail idProduct={5}/> },
];

export default routes;