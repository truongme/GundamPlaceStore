import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
