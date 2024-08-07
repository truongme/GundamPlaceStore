import Cart from "../views/Cart";
import Home from "../views/Home";
import Login from "../views/Login";
import News from "../views/News";
import User from "../views/User";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/cart", element: <Cart /> },
    { path: "/news", element: <News /> },
    { path: "/user", element: <User /> },
];

export default routes;