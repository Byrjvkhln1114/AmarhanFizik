import { useState } from "react";
import { Header, Footer, Buton } from "../component";
import axios from "axios";
export const FormulaInput = () => {
  const [equation, setEquation] = useState("");
  const [syLetter, setsyLetter] = useState("");
  const [syDetail, setsyDetail] = useState("");
  const [Model, setModel] = useState("");
  const [Branches, setBranches] = useState("aaasda");
  const result = async () => {
    const eq = equation.split(",");
    const letter = syLetter.split(",");
    const detail = syDetail.split(",");
    const bra = Branches.split(",");
    const resultD = axios.post("https://amarhan-physics.vercel.app/formula", {
      Equation: eq,
      Symbols: {
        letter: letter,
        Detail: detail,
      },
      Equation_model: Model,
      Branches: bra,
    });
  };
  return (
    <div>
      <div
        className="w-100 d-flex flex-column align-items-center text-light gap-5 home8"
        style={{ background: "#1f1f47", height: "96vh" }}
      >
        <Header></Header>
        <div className="d-flex gap-5 justify-content-center ">
          <div className="w-50">
            <img className="w-100" src="example.png" alt="" />
          </div>
          <div className="d-flex w-50 flex-column gap-5 ">
            <input
              className="bg-transparent"
              placeholder="f=ma,force=mass*acceleration"
              onChange={(e) => setEquation(e.target.value)}
              type="text"
            />
            <input
              className="bg-transparent"
              placeholder="m,a,f"
              onChange={(e) => setsyLetter(e.target.value)}
              type="text"
            />
            <input
              className="bg-transparent"
              placeholder="mass,acceleration,force"
              onChange={(e) => setsyDetail(e.target.value)}
              type="text"
            />
            <input
              className="bg-transparent"
              placeholder="a*b"
              onChange={(e) => setModel(e.target.value)}
              type="text"
            />
            <input
              className="bg-transparent"
              placeholder="branches"
              onChange={(e) => setBranches(e.target.value)}
              type="text"
            />
          </div>
        </div>
        <Buton
          width={"120px"}
          height={"40px"}
          content={"Add"}
          variant="primary"
          onclicker={result}
        ></Buton>
      </div>
      <Footer></Footer>
    </div>
  );
};
