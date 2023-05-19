import { useState } from "react";
import { Header, Footer } from "../component";
import { Link } from "react-router-dom";
import "./mystyles.css"
export const Home = () => {
  return (
    <div className="">
      <div
        className="w-100 d-flex flex-column align-items-center text-light gap-5 home8"
        style={{ background: "#1f1f47", height: "96vh" }}
      >
        <Header></Header>
        <div
          className="w-100 d-flex flex-column align-items-center text-light home6"
        >
          <h1 className="mt-5 home5">
            Физик бол асуудал
            <span className="ms-2 " style={{ color: "#f3573c" }}>
              БИШ !
            </span>
          </h1>
          <div className="d-flex w-75 justify-content-between align-items-center home7">
            <Link
              className="d-flex flex-column align-items-center gap-5 justify-content-center text-light home1"
              to={"formula"}
            >
              <div
                className="d-flex flex-column align-items-center gap-5 justify-content-center home2"
              >
                <img style={{ height: "60%" }} src="formula.png"></img>
                <h2 className="home2-1">Томьёо</h2>
              </div>
            </Link>
            <Link
              className="d-flex flex-column align-items-center gap-5 justify-content-center text-light home13"
              to={"definition"}
              >
              <div
                className="d-flex flex-column align-items-center gap-5 justify-content-center home3"
              >
                <img style={{ height: "60%" }} src="definition.png"></img>
                <h2 className="home3-1">Тайлбар толь</h2>
              </div>
            </Link>
            <Link
              className="d-flex flex-column align-items-center gap-5 justify-content-center text-light home14"
              to={"formula"}>
            <div
              className="d-flex flex-column align-items-center gap-5 justify-content-center home4"
            >
              <img style={{ height: "60%" }} src="circuit.png"></img>
              <h2 className="home4-1">Хэлхээ</h2>
            </div>
                        </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
    </div>
    </div>
  );
};
