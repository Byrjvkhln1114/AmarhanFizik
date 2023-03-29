import { useState } from "react";

export const Home = () => {
  return (
    <div
      className="w-100 d-flex flex-column align-items-center text-light justify-content-center gap-5"
      style={{ background: "#1f1f47", height: "100vh" }}
    >
      <h1 className="d-flex">
        Explore new skills with{" "}
        <h1 className="ms-2" style={{ color: "#f3573c" }}>
          {" "}
          School
        </h1>
      </h1>
      <div className="d-flex w-75 justify-content-between align-items-center ">
        <div
          className="d-flex flex-column align-items-center gap-5"
          style={{
            background: "#5381f9",
            width: "30%",
            height: "45vh",
            borderRadius: "30px",
          }}
        >
          <img style={{ height: "60%" }} src="formula.png"></img>
          <h2>Formula</h2>
        </div>
        <div
          className="d-flex flex-column align-items-center gap-5"
          style={{
            background: "#e45a7e",
            width: "30%",
            height: "45vh",
            borderRadius: "30px",
          }}
        >
          <img style={{ height: "60%" }} src="definition.png"></img>
          <h2>Definition</h2>
        </div>
        <div
          className="d-flex flex-column align-items-center gap-5"
          style={{
            background: "#be29f8",
            width: "30%",
            height: "45vh",
            borderRadius: "30px",
          }}
        >
          <img style={{ height: "60%" }} src="circuit.png"></img>
          <h2>Circuit</h2>
        </div>
      </div>
    </div>
  );
};
