import { useState } from "react";
import { Header, Footer } from "../component";
import { Link } from "react-router-dom";
import "./mystyles.css"
export const Home = () => {
  return (
    <div>
      <div
        className="w-100 d-flex flex-column align-items-center text-light  gap-5"
        style={{ background: "#1f1f47", height: "96vh" }}
      >
        <Header></Header>
        <div
          style={{ gap: "10vh" }}
          className="w-100  d-flex flex-column align-items-center text-light "
        >
          <h1 className="d-flex mt-5">
            Физик бол асуудал
            <span className="ms-2 " style={{ color: "#f3573c" }}>
              БИШ !
            </span>
          </h1>
          <div className="d-flex w-75 justify-content-between align-items-center ">
            <Link
              className="d-flex flex-column align-items-center gap-5 justify-content-center text-light home1"
              to={"formula"}
            >
              <div
                className="d-flex flex-column align-items-center gap-5 justify-content-center home2"
              >
                <img style={{ height: "60%" }} src="formula.png"></img>
                <h2>Томьёо</h2>
              </div>
            </Link>

            <div
              className="d-flex flex-column align-items-center gap-5 justify-content-center home3"
            >
              <img style={{ height: "60%" }} src="definition.png"></img>
              <h2>Тайлбар толь</h2>
            </div>
            <div
              className="d-flex flex-column align-items-center gap-5 justify-content-center home4"
            >
              <img style={{ height: "60%" }} src="circuit.png"></img>
              <h2>Хэлхээ</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
