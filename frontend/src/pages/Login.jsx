import { Buton } from "../component/Buton";
import { Header } from "../component/header";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const Login = async () => {
    const result = await axios.post("http://localhost:8000/login", {
      email: email,
      password: password,
    });

    if (result.data == "success") {
      navigate("/");
    } else {
      setErr(result.data);
    }
  };
  return (
    <div
      style={{ background: "#1f1f47", height: "100vh" }}
      className="d-flex flex-column  align-items-center "
    >
      <Header></Header>
      <div
        style={{
          height: "65vh",
          background: "white",
          width: "27vw",
          color: "#1F1F47",
          borderRadius: "10px",
          marginTop: "10vh",
        }}
        className="d-flex justify-content-center align-items-center flex-column "
      >
        <div className="w-75">
          <p style={{ fontSize: "25px", fontWeight: "300" }}>Тавтай морил!</p>
        </div>
        <p style={{ color: "#1F1F47", fontSize: "50px" }}>Нэвтрэх</p>
        <div
          style={{ height: "45vh", width: "20vw" }}
          className=" d-flex flex-column justify-content-around"
        >
          <div>
            <h5 style={{ fontWeight: "400" }}>И-мэйл</h5>
            <input
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
                paddingLeft: "20px",
              }}
              type="email"
              placeholder="И-мэйлээ бичнэ үү"
            />
          </div>
          <div>
            <h5 style={{ fontWeight: "400" }}>Нууц үг</h5>
            <input
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
                paddingLeft: "20px",
              }}
              type="password"
              placeholder="Нууц үг бичнэ үү"
            />
            <div
              className="mt-3"
              style={{ display: "flex", justifyContent: "flex-end " }}
            >
              <Link style={{ textDecoration: "none" }} to="/forgot">
                <h5
                  style={{
                    justifyContent: "end",
                    color: "#F3573C",
                    fontWeight: "300",
                  }}
                >
                  Нууц үг мартсан ?
                </h5>
              </Link>
            </div>
            <span className="w-100 d-flex justify-content-center text-danger">
              {err}
            </span>
          </div>

          <Buton
            onclicker={Login}
            content={"Нэвтрэх"}
            width={"100%"}
            height={"5vh"}
          ></Buton>

          <h5
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              color: "#F3573C",
            }}
          >
            <span style={{ color: "#7D7D7D" }}>Та бүртгэлтэй юу? ㅤ</span>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <span style={{ color: "#F3573C" }}>БҮРТГҮҮЛЭХ</span>
            </Link>
            ㅤ
          </h5>
        </div>
      </div>
    </div>
  );
};
