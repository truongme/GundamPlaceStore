import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import routes from '../src/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Message from "./components/Message";
import styles from './styles.module.scss'
import Header from "./layouts/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <div className={styles.Message}>
        <Message />
      </div>
      <Footer />
    </div>
  );
}

export default App;
