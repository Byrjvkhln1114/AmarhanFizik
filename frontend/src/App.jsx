import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Formula } from "./pages";
import { Context } from "./context";
import { Login } from "./pages/Login";
import { Sign_Up } from "./pages/Sign_Up";
import { Forgot } from "./pages/Forgot";
import { About } from "./pages/About";
import { Formuladetail, FormulaInput, User, Definition } from "./pages";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/formula" element={<Formula />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Sign_Up />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/formuladetail" element={<Formuladetail />}></Route>
          <Route path="/formulainput" element={<FormulaInput />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
          <Route path="/definition" element={<Definition />}></Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
