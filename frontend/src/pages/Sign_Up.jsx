import { Buton } from "../component/buton";
import { Header, Footer } from "../component";
import "./mystyles.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Sign_Up = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [err, setErr] = useState("");
  const [i, setI] = useState("");
  const navigate = useNavigate();
  const result = async () => {
    if (username.length <= 20 && username.length >= 1) {
      if (password.length <= 16 && password.length >= 5) {
        if (password == repassword) {
          const a = await axios.post("https://amarhan-physics.vercel.app/signup", {
            Username: username,
            Email: email,
            Password: password,
          });
          if (a?.data == "success") {
            navigate("/");
          }
        } else {
          setErr("Repassword dont match password");
          setI("repassword");
        }
      } else {
        setErr("Password should 5-16");
        setI("password");
      }
    } else {
      setErr("Username should 1-20");
      setI("username");
    }
  };
  return (
    <div>
      <div
        style={{ background: "#1f1f47", height: "100vh" }}
        className="d-flex flex-column  align-items-center "
      >
        <Header></Header>
        <div className="d-flex justify-content-center align-items-center flex-column sign1">
          <div className="login7">
            <p style={{ fontSize: "25px", fontWeight: "300" }}>Тавтай морил!</p>
          </div>
          <p className="sign7">Бүртгүүлэх</p>
          <div className=" d-flex flex-column justify-content-around sign6">
            <div>
              <h5 style={{ fontWeight: "400" }}>Хэрэглэгчийн нэр</h5>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="sign2"
                type="text"
                placeholder="Хэрэглэгчийн нэрээ бичнэ үү"
              />
              <div
                className="text-danger"
                style={{ display: i == "username" ? "flex" : "none" }}
              >
                {err}
              </div>
            </div>
            <div>
              <h5 style={{ fontWeight: "400" }}>И-мэйл</h5>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="sign3"
                type="email"
                placeholder="И-мэйлээ бичнэ үү"
              />
            </div>

            <div>
              <h5 style={{ fontWeight: "400" }}>Нууц үг</h5>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="sign4"
                type="password"
                placeholder="Нууц үг бичнэ үү"
              />
              <div
                className="text-danger"
                style={{ display: i == "password" ? "flex" : "none" }}
              >
                {err}
              </div>
            </div>
            <div>
              <h5 style={{ fontWeight: "400" }}>Нууц үг давтна уу</h5>
              <input
                onChange={(e) => setRepassword(e.target.value)}
                className="sign5"
                type="password"
                placeholder="Нууц үг давтна уу"
              />
              <div
                className="text-danger"
                style={{ display: i == "repassword" ? "flex" : "none" }}
              >
                {err}
              </div>
            </div>
            <div className="sign8">
              <Buton
                onclicker={result}
                content={"Бүртгүүлэх"}
                width={"100%"}
                height={"5vh"}
              ></Buton>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
