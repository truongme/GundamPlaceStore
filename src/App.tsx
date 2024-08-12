import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import routes from '../src/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss'
import Header from "./layouts/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <div className={styles.message}>
        <div className={styles.iconMessageCtn}>
          <span className={styles.iconMessage}></span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
