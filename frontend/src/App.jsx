import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Context } from "./context";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
