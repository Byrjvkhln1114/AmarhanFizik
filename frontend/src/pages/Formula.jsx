import { useEffect, useState, useContext } from "react";
import { Header, Footer } from "../component";
import { useNavigate } from "react-router-dom";

import "./mystyles.css";
import axios from "axios";
export const Formula = () => {
  const [allequations, setAllequations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState();
  const [unselect, setunselect] = useState(false);
  const [more, setMore] = useState(null);
  const symbol_datas = [
    "Acceleration",
    "Force",
    "Velocity",
    "Initial speed",
    "Time",
    "Final_speed",
  ];
  const Navigate = useNavigate("");
  const check = 0;
  useEffect(() => {
    (async () => {
      formulagetter();
    })();
  }, [check]);
  const formulagetter = async (filt, i) => {
    const all = await axios.post("http://localhost:8000/allformula", {
      filt: filt,
    });
    setAllequations(all);
    setLoading(false);
    if (unselect == true) {
      setSelect();
      formulagetter();
      window.location.reload();
    }
  };
  const moreFormulas = async (id) => {
    const more = await axios.post("http://localhost:8000/findmoreformulas", {
      branches: id,
    });
    setMore(more.data);
  };
  const edit = async (id) => {
    const result = await axios.post("http://localhost:8000/findformula", {
      _id: id,
    });
    localStorage.setItem("formula", JSON.stringify(result?.data));
    Navigate("/formuladetail");
  };
  return (
    <div>
      <div className="d-flex flex-column align-items-center formula1">
        <Header></Header>

        {loading == true ? (
          <div
            style={{ color: "rgb(243, 87, 60", height: "100vh" }}
            className="w-100 d-flex justify-content-center align-items-center"
          >
            <h1> Loading...</h1>
          </div>
        ) : (
          <div className="w-75 d-flex flex-column gap-2 mt-5">
            <div className="d-flex text-light gap-3">
              {symbol_datas.map((el, i) => {
                return (
                  <button
                    id={i}
                    style={{
                      border: "1px solid rgb(243, 87, 60)",
                      borderRadius: "5px",
                      background: i == select ? "rgb(243, 87, 60)" : "",
                    }}
                    className="px-2 pt-1 pb-1"
                    onClick={() => (
                      formulagetter(el, i), setSelect(i), setunselect(!select)
                    )}
                  >
                    {el}
                  </button>
                );
              })}
            </div>
            <div className="w-100  mt-5 d-flex gap-5 text-light">
              {allequations?.data?.map((el, i) => {
                if (el.Branches[0] != "aaasda") {
                  return (
                    <div>
                      <div
                        className="d-flex justify-content-center align-items-center fs-5 formula2"
                        key={i}
                        onClick={() => edit(el?._id)}
                      >
                        {el?.Equation[0]}
                      </div>
                      <button
                        onClick={() => moreFormulas(el.Branches)}
                        className="ml-2"
                      >
                        -
                      </button>
                      {more?.map((ej, l) => {
                        return (
                          <div
                            className="d-flex justify-content-center align-items-center fs-5 formula2"
                            key={l}
                            onClick={() => edit(ej?._id)}
                          >
                            {ej?.Equation[0]}
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};
