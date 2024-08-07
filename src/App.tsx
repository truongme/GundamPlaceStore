import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from '../src/router';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routes.map((route, index) =>(
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
