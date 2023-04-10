import { useState } from "react";
import { Header } from "../component";
export const Home = () => {
  return (
    <div
      className="w-100 d-flex flex-column align-items-center text-light  gap-5"
      style={{ background: "#1f1f47", height: "100vh" }}
    >
      <Header></Header>
      <h1 className="d-flex mt-5">
        Физик бол асуудал
        <span className="ms-2 " style={{ color: "#f3573c" }}>
          БИШ !
        </span>
      </h1>
      <div className="d-flex w-75 justify-content-between align-items-center ">
        <div
          className="d-flex flex-column align-items-center gap-5 justify-content-center"
          style={{
            background: "#5381f9",
            width: "30%",
            height: "45vh",
            borderRadius: "30px",
          }}
        >
          <img style={{ height: "60%" }} src="formula.png"></img>
          <h2>Томьёо</h2>
        </div>
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
      <Footer />
    </div>
  );
};
