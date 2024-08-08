import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from '../src/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BasicSpeedDial from "./components/SpeedDial";
import styles from './styles.module.scss'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <div className={styles.speedDial}>
        <BasicSpeedDial />
      </div>
      <Footer />
    </div>
  );
}

export default App;
