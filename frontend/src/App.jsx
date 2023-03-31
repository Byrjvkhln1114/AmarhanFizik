import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Formula } from "./pages";
import { Context } from "./context";
import { Login } from "./pages/Login";
function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/formula" element={<Formula />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
