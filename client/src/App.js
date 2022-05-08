import Login from "./components/pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/pages/Register";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="nav">
        <div className="title">Bits Cloud Authentication</div>
        <div>
          <b>
            <p>2021mt93702@wilp.bits-pilani.ac.in</p>
          </b>
          <b>
            <p>Arvind.S</p>
          </b>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
