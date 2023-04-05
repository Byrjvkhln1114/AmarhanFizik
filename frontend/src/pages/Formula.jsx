import { useEffect, useRef, useState } from "react";
import { Header, Buton } from "../component";
import axios from "axios";

export const Formula = () => {
  const [allequations, setAllequations] = useState([]);
  const check = 0;
  useEffect(() => {
    (async () => {
      const all = await axios.get("http://localhost:8000/allformula");
      setAllequations(all);
    })();
  }, [check]);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [ans, setAns] = useState("");
  const Calculate = async (id) => {
    const result = await axios.post("http://localhost:8000/calculate", {
      id: id,
      symbol: [a, b],
    });
    setAns(result.data[0]);
  };
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ background: "#1f1f47", height: "100vh" }}
    >
      <Header></Header>
      <div className="w-75 mt-5 d-flex flex-column gap-5">
        {allequations?.data?.map((el, i) => {
          return (
            <div className="d-flex gap-4 align-items-center text-light" key={i}>
              {i + 1 + ")  " + el?.Equation[0] + " -----> " + el?.Equation[1]}
              <Buton
                onclicker={() => Calculate(el?._id)}
                width={"80px"}
                height={"40px"}
                content={"edit"}
              ></Buton>
              {el.Symbols[0]}={" "}
              <input
                style={{ width: "40px" }}
                onChange={(e) => setA(e.target.value)}
                type="number"
                placeholder={el.Symbols[0]}
              />
              <br />
              {el.Symbols[1]}={" "}
              <input
                style={{ width: "40px" }}
                onChange={(e) => setB(e.target.value)}
                type="number"
                placeholder={el.Symbols[1]}
              />
              <br />={ans}
            </div>
          );
        })}
      </div>
    </div>
  );
};
