import { useEffect, useState, useContext } from "react";
import { Header, Buton, Footer } from "../component";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export const Formula = () => {
  const [allequations, setAllequations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setFdata } = useContext(MainContext);
  const Navigate = useNavigate("");
  const check = 0;
  useEffect(() => {
    (async () => {
      const all = await axios.get("http://localhost:8000/allformula");
      setAllequations(all);
      setLoading(false);
    })();
  }, [check]);
  const edit = async (id) => {
    const result = await axios.post("http://localhost:8000/findformula", {
      _id: id,
    });

    localStorage.setItem("formula", JSON.stringify(result?.data));
    Navigate("/formuladetail");
  };
  return (
    <div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ background: "#1f1f47", height: "96vh" }}
      >
        <Header></Header>

        {loading == true ? (
          <div
            style={{ color: "rgb(243, 87, 60", height: "100vh" }}
            className="w-100 d-flex justify-content-center align-items-center"
          >
            <h1> Loading...</h1>
          </div>
        ) : (
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
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};
