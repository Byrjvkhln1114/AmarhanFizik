import { useEffect, useState, useContext } from "react";
import { Header, Buton, Footer } from "../component";
import { MainContext } from "../context";
import axios from "axios";
export const Formuladetail = () => {
  const [fdata, setFdata] = useState(null);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [e, setE] = useState("");
  const [f, setF] = useState("");
  const [i0, setI0] = useState(false);
  const [i1, setI1] = useState(false);
  const [i2, setI2] = useState(false);
  const [i3, setI3] = useState(false);
  const [ans, setAns] = useState("");
  const check = 0;
  useEffect(() => {
    switch (
      JSON.parse(localStorage.getItem("formula"))?.Symbols.letter.length
    ) {
      case 3:
        setI0(true);
        break;
      case 4:
        setI0(true);
        setI1(true);
        break;
      case 5:
        setI0(true);
        setI1(true);
        setI2(true);
        break;
      case 6:
        setI0(true);
        setI1(true);
        setI2(true);
        setI3(true);
        break;
    }
    setFdata(JSON.parse(localStorage.getItem("formula")));
  }, [check]);

  const Calculate = async (id) => {
    const result = await axios.post("http://localhost:8000/calculate", {
      id: id,
      symbol: [a, b, c, d, e, f],
    });
    setAns(result.data[0]);
  };

  return (
    <div>
      <div
        className="d-flex flex-column align-items-center "
        style={{ background: "#1f1f47", height: "96vh" }}
      >
        <Header></Header>
        <div className=" text-light w-75">
          <div
            style={{
              border: "1px solid rgb(243, 87, 60) ",
              borderRadius: "5px",
            }}
            className="d-flex flex-column text-light w-25 fs-5 gap-3 p-4"
          >
            <div>{fdata?.Equation[1]}</div>
            <div
              className="d-flex justify-content-between"
              style={{ borderBottom: " 1px solid rgb(243, 87, 60)" }}
            >
              {fdata?.Symbols.Detail[0]}
              <input
                style={{
                  width: "40px",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                onChange={(e) => setA(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[0]}
              />
            </div>
            <div
              style={{
                borderBottom: "1px solid rgb(243, 87, 60",
                display: i0 == false ? "none" : "flex",
              }}
              className=" justify-content-between"
            >
              {fdata?.Symbols.Detail[1]}
              <input
                style={{
                  width: "40px",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                onChange={(e) => setB(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[1]}
              />
            </div>
            <div
              className=" justify-content-between"
              style={{
                borderBottom: "1px solid rgb(243, 87, 60",
                display: i1 == false ? "none" : "flex",
              }}
            >
              {fdata?.Symbols.Detail[2]}
              <input
                style={{
                  width: "40px",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                onChange={(e) => setC(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[2]}
              />
            </div>
            <div
              className=" justify-content-between"
              style={{
                borderBottom: "1px solid rgb(243, 87, 60",
                display: i2 == false ? "none" : "flex",
              }}
            >
              {fdata?.Symbols.Detail[3]}
              <input
                style={{
                  width: "40px",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                onChange={(e) => setD(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[3]}
              />
            </div>
            <div
              className=" justify-content-between"
              style={{
                borderBottom: "1px solid rgb(243, 87, 60",
                display: i3 == false ? "none" : "flex",
              }}
            >
              {fdata?.Symbols.Detail[4]}
              <input
                style={{
                  width: "40px",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                onChange={(e) => setD(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[4]}
              />
            </div>

            {fdata?.Symbols.Detail[fdata?.Symbols.Detail.length - 1] +
              "=" +
              ans}
            <Buton
              width={"120px"}
              height={"40px"}
              content={"Тооцоолох"}
              variant="primary"
              onclicker={() => Calculate(fdata?._id)}
            >
              ada
            </Buton>
          </div>
        </div>
        */
      </div>
      <Footer></Footer>
    </div>
  );
};
{
}
