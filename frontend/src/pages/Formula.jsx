import { useEffect, useState, useContext } from "react";
import { Header, Buton, Footer } from "../component";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context";
import "./mystyles.css";
import axios from "axios";
export const Formula = () => {
  const [allequations, setAllequations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setFdata } = useContext(MainContext);
  const Navigate = useNavigate("");
  const check = 0;
  useEffect(() => {
    (async () => {
      formulagetter();
    })();
  }, [check]);
  const formulagetter = async () => {
    const all = await axios.post("http://localhost:8000/allformula");
    setAllequations(all);
    setLoading(false);
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
        <div className="text-light">
          <button>f</button>
        </div>
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
                  className="d-flex justify-content-center align-items-center fs-5 formula2"
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
