import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Formula } from "./pages";
import { Context } from "./context";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/formula" element={<Formula />}></Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
