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
  const [arrow, setArrow] = useState(true);
  const [id, setId] = useState(true);

  const symbol_datas = [
    "Хүч",
    "Хурд",
    "Хурдатгал",
    "Нягт",
    "Чадал",
    "Жин",
    "Даралт",
    "Кинетик энерги",
    "Хүчдэл",
    "Долгионы давтамж",
    "Масс",
    "Татах хүч",
    "Зам",
    "Хугацаа",
    "Хугацаа",
    "Анхны хурд",
    "Эзлэхүүн",
    "Ажил",
    "Хугацаа",
    "Гүйдэл",
    "Эсэргүүцэл",
    "Долгионы хурд",
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
    setArrow(!arrow);
  };
  const edit = async (id) => {
    const result = await axios.post("http://localhost:8000/findformula", {
      _id: id,
    });
    localStorage.setItem("formula", JSON.stringify(result.data));
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
            <div className="d-flex">
              <button
                style={{
                  border: "1px solid rgb(243, 87, 60)",
                  borderRadius: "5px",
                }}
                className="px-2 pt-1 pb-1 formula5  mr-3 text-light"
                onClick={() => window.location.reload()}
              >
                all
              </button>
              <div
                style={{ overflow: "scroll" }}
                className="d-flex text-light gap-3"
              >
                {symbol_datas.map((el, i) => {
                  return (
                    <button
                      id={i}
                      style={{
                        border: "1px solid rgb(243, 87, 60)",
                        borderRadius: "5px",
                        background: i == select ? "rgb(243, 87, 60)" : "",
                        width: "100px",
                      }}
                      className="px-2 pt-1 pb-1 formula5"
                      onClick={() => (formulagetter(el, i), setSelect(i))}
                    >
                      {el}
                    </button>
                  );
                })}
              </div>
            </div>
            <div
              style={{ display: "flex", flexWrap: "wrap" }}
              className=" w-100 mt-5 d-flex gap-5 text-light "
            >
              {allequations?.data?.map((el, i) => {
                if (el.Branches[0] != "aaasda") {
                  return (
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex ">
                        <div
                          className="d-flex justify-content-center align-items-center fs-5 formula2"
                          key={i}
                          onClick={() => edit(el?._id)}
                        >
                          {el?.Equation[0]}
                        </div>
                        <button
                          onClick={() => (
                            moreFormulas(el.Branches), setId(el?._id)
                          )}
                          className="ml-2"
                        >
                          {arrow == false && id == el?._id ? " ↑" : "↓"}
                        </button>
                      </div>
                      <div className="d-flex flex-column gap-3">
                        {more?.map((ej, l) => {
                          return (
                            <div
                              style={{
                                display:
                                  arrow == false && id == el?._id
                                    ? "flex"
                                    : "none",
                              }}
                              className=" justify-content-center align-items-center fs-5 formula2"
                              key={l}
                              onClick={() => edit(ej?._id)}
                            >
                              {ej?.Equation[0]}
                            </div>
                          );
                        })}
                      </div>
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
