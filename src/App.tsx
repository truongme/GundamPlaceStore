import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./views/Cart";
import News from "./views/News";
import User from "./views/User";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/news" element={<News />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
