import { useEffect, useState, useContext } from "react";
import { Header, Buton, Footer } from "../component";
import "./component.css";
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
  const [quantity, setquantity] = useState(null);
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
    quantityMeaning();
  }, [check]);
  const quantityMeaning = async () => {
    const a = await axios.post(
      "https://amarhan-physics.vercel.app/quantityfind",
      {
        symbols: JSON.parse(localStorage.getItem("formula")).Symbols.Detail,
      }
    );
    setquantity(a.data);
  };
  const Calculate = async (id) => {
    const result = await axios.post(
      "https://amarhan-physics.vercel.app/calculate",
      {
        id: id,
        symbol: [a, b, c, d, e, f],
      }
    );
    setAns(result.data[0]);
  };
  return (
    <div>
      <div
        className="d-flex flex-column align-items-center "
        style={{ background: "#1f1f47", height: "96vh" }}
      >
        <Header></Header>
        <div
          style={{ display: "flex", flexWrap: "wrap" }}
          className=" text-light w-75 gap-5 text mt-4"
        >
          <div
            style={{
              border: "1px solid rgb(243, 87, 60) ",
              borderRadius: "5px",
            }}
            className="d-flex flex-column text-light fs-5 gap-3 p-4"
          >
            <div style={{ borderBottom: "1px solid rgb(243, 87, 60)" }}>
              <div className="mb-3">{fdata?.Equation[1]}</div>
            </div>
            <div className="d-flex justify-content-between">
              {fdata?.Symbols.Detail[0]}
              <input
                style={{
                  width: "70%",
                  backgroundColor: "transparent",
                  outline: "none",
                  textAlign: "end",
                }}
                onChange={(e) => setA(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[0]}
              />
            </div>
            <div
              style={{
                display: i0 == false ? "none" : "flex",
              }}
              className=" justify-content-between"
            >
              {fdata?.Symbols.Detail[1]}
              <input
                style={{
                  width: "70%",
                  backgroundColor: "transparent",
                  outline: "none",
                  textAlign: "end",
                }}
                onChange={(e) => setB(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[1]}
              />
            </div>
            <div
              className=" justify-content-between"
              style={{
                display: i1 == false ? "none" : "flex",
              }}
            >
              {fdata?.Symbols.Detail[2]}
              <input
                style={{
                  width: "70%",
                  backgroundColor: "transparent",
                  outline: "none",
                  textAlign: "end",
                }}
                onChange={(e) => setC(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[2]}
              />
            </div>
            <div
              className=" justify-content-between"
              style={{
                display: i2 == false ? "none" : "flex",
              }}
            >
              {fdata?.Symbols.Detail[3]}
              <input
                style={{
                  width: "70%",
                  backgroundColor: "transparent",
                  outline: "none",
                  textAlign: "end",
                }}
                onChange={(e) => setD(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[3]}
              />
            </div>
            <div
              className=" justify-content-between"
              style={{
                display: i3 == false ? "none" : "flex",
              }}
            >
              {fdata?.Symbols.Detail[4]}
              <input
                style={{
                  width: "70%",
                  backgroundColor: "transparent",
                  outline: "none",
                  textAlign: "end",
                }}
                onChange={(e) => setD(e.target.value)}
                type="number"
                placeholder={fdata?.Symbols.letter[4]}
              />
            </div>

            <div
              style={{ borderTop: "1px solid rgb(243, 87, 60)" }}
              className="w-100 d-flex justify-content-between "
            >
              <div className="mt-3">
                {fdata?.Symbols.Detail[fdata?.Symbols.Detail.length - 1]} (
                {fdata?.Symbols.letter[fdata?.Symbols.letter.length - 1]})
              </div>
              <div className="mt-3">{ans}</div>
            </div>
            <Buton
              width={"120px"}
              height={"40px"}
              content={"Тооцоолох"}
              variant="primary"
              onclicker={() => Calculate(fdata?._id)}
            ></Buton>
          </div>
          <div style={{ width: "400px" }} className="d-flex flex-column ">
            <div className="d-flex w-100">
              <div
                style={{ width: "30%", border: "1px solid rgb(243, 87, 60" }}
                className="d-flex justify-content-center "
              >
                Name
              </div>

              <div
                style={{ width: "30%", border: "1px solid rgb(243, 87, 60" }}
                className="d-flex justify-content-center
               "
              >
                Symbol
              </div>
              <div
                style={{ width: "30%", border: "1px solid rgb(243, 87, 60" }}
                className="d-flex justify-content-center "
              >
                Unit
              </div>
            </div>

            {quantity?.map((el, i) => {
              return (
                <div className="d-flex w-100" key={i}>
                  <div
                    style={{
                      width: "30%",
                      border: "1px solid rgb(243, 87, 60",
                    }}
                    className="d-flex justify-content-center "
                  >
                    {el.Symbol}
                  </div>

                  <div
                    style={{
                      width: "30%",
                      border: "1px solid rgb(243, 87, 60",
                    }}
                    className="d-flex justify-content-center "
                  >
                    {el.Name}
                  </div>

                  <div
                    style={{
                      width: "30%",
                      border: "1px solid rgb(243, 87, 60",
                    }}
                    className="d-flex justify-content-center "
                  >
                    {el.Unit}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
{
}
