import { useEffect, useState } from "react";
import { Header, Buton, Footer } from "../component";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const Formula = () => {
  const [allequations, setAllequations] = useState([]);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [e, setE] = useState("");
  const [f, setF] = useState("");
  const [i1, setI1] = useState(false);
  const [i2, setI2] = useState(false);
  const [i3, setI3] = useState(false);
  const [ans, setAns] = useState("");
  const [show, setShow] = useState(false);
  const [fdata, setFdata] = useState(null);
  const check = 0;
  useEffect(() => {
    (async () => {
      const all = await axios.get("http://localhost:8000/allformula");
      setAllequations(all);
    })();
  }, [check]);

  const Closer = () => {
    setShow(false);
    setI1(false);
    setI2(false);
    setAns("");
  };
  const Calculate = async (id) => {
    const result = await axios.post("http://localhost:8000/calculate", {
      id: id,
      symbol: [a, b, c, d, e, f],
    });
    setAns(result.data[0]);
  };
  const edit = async (id) => {
    setShow(true);
    const result = await axios.post("http://localhost:8000/findformula", {
      _id: id,
    });
    setFdata(await result?.data);

    console.log(result?.data?.Symbols.length);
    switch (result?.data?.Symbols.length) {
      case 4:
        setI1(true);
        break;
      case 5:
        setI1(true);
        setI2(true);
        break;
    }
  };
  return (
    <div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ background: "#1f1f47", height: "96vh" }}
      >
        <Header></Header>
        <div>
          <Modal show={show}>
            <Modal.Body>
              <div className="d-flex flex-column">
                <div>
                  {fdata?.Symbols[0]}={" "}
                  <input
                    style={{ width: "40px" }}
                    onChange={(e) => setA(e.target.value)}
                    type="number"
                    placeholder={fdata?.Symbols[0]}
                  />
                </div>
                <div>
                  {fdata?.Symbols[1]}={" "}
                  <input
                    style={{ width: "40px" }}
                    onChange={(e) => setB(e.target.value)}
                    type="number"
                    placeholder={fdata?.Symbols[1]}
                  />
                </div>
                <div style={{ display: i1 == false ? "none" : "flex" }}>
                  {fdata?.Symbols[2]}={" "}
                  <input
                    style={{ width: "40px" }}
                    onChange={(e) => setC(e.target.value)}
                    type="number"
                    placeholder={fdata?.Symbols[2]}
                  />
                </div>
                <div style={{ display: i2 == false ? "none" : "flex" }}>
                  {fdata?.Symbols[3]}={" "}
                  <input
                    style={{ width: "40px" }}
                    onChange={(e) => setD(e.target.value)}
                    type="number"
                    placeholder={fdata?.Symbols[3]}
                  />
                </div>
                <div style={{ display: i3 == false ? "none" : "flex" }}>
                  {fdata?.Symbols[4]}={" "}
                  <input
                    style={{ width: "40px" }}
                    onChange={(e) => setD(e.target.value)}
                    type="number"
                    placeholder={fdata?.Symbols[4]}
                  />
                </div>

                {fdata?.Symbols[fdata?.Symbols.length - 1] + "=" + ans}
                <Buton
                  width={"120px"}
                  height={"40px"}
                  content={"Тооцоолох"}
                  variant="primary"
                  onclicker={() => Calculate(fdata?._id)}
                ></Buton>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => Closer()}>
                Хаах
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="w-75 mt-5 d-flex  gap-5 text-light">
          {allequations?.data?.map((el, i) => {
            return (
              <div
                className="d-flex justify-content-center align-items-center fs-5"
                style={{
                  width: "225px",
                  height: "100px",
                  cursor: "pointer",
                  boxShadow: "6px 8px 42px 1px rgba(0,0,0,0.15)",
                  borderRadius: "5px",
                  border: "solid rgb(243, 87, 60)",
                }}
                key={i}
                onClick={() => edit(el?._id)}
              >
                {el?.Equation[0]}
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
