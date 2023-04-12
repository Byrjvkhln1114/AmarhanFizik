import { useState } from "react";
import { Header, Footer } from "../component";
import { Link } from "react-router-dom";
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
              style={{
                background: "#5381f9",
                width: "30%",
                height: "45vh",
                borderRadius: "30px",
                textDecoration: "none",
              }}
              className="d-flex flex-column align-items-center gap-5 justify-content-center text-light"
              to={"formula"}
            >
              <div
                className="d-flex flex-column align-items-center gap-5 justify-content-center"
                style={{
                  background: "#5381f9",
                  width: "30%",
                  borderRadius: "30px",
                  height: "100%",
                  width: "100%",
                }}
              >
                <img style={{ height: "60%" }} src="formula.png"></img>
                <h2>Томьёо</h2>
              </div>
            </Link>

            <div
              className="d-flex flex-column align-items-center gap-5 justify-content-center"
              style={{
                background: "#e45a7e",
                width: "30%",
                height: "45vh",
                borderRadius: "30px",
              }}
            >
              <img style={{ height: "60%" }} src="definition.png"></img>
              <h2>Тайлбар толь</h2>
            </div>
            <div
              className="d-flex flex-column align-items-center gap-5 justify-content-center"
              style={{
                background: "#be29f8",
                width: "30%",
                height: "45vh",
                borderRadius: "30px",
              }}
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
