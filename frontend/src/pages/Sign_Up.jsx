import { Buton } from "../component/Buton";
import { Header } from "../component/header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sign_Up = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repassword, setRepassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  setTimeout(() => {
    setErr("");
  }, "9000");
  const UserCreator = async () => {
    if (username.length > 1 && username.length < 31) {
      if (email.includes("@") == true) {
        if (password.length > 4 && password.length < 61) {
          if (password == repassword) {
            const result = await axios.post("http://localhost:8000/user", {
              username: username,
              email: email,
              password: password,
            });
            navigate("/login");
          } else {
            setErr("Password dont match");
          }
        } else {
          setErr("Password should contain characters between 5-61");
        }
      } else {
        setErr("Write correct email");
      }
    } else {
      setErr("Username should contain characters between 2-30");
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
        <p style={{ color: "#1F1F47", fontSize: "50px" }}>Бүртгүүлэх</p>
        <div
          style={{ height: "45vh", width: "20vw" }}
          className=" d-flex flex-column justify-content-around"
        >
          <div>
            <h5 style={{ fontWeight: "400" }}>Хэрэглэгчийн нэр</h5>
            <input
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
                paddingLeft: "20px",
              }}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Хэрэглэгчийн нэрээ бичнэ үү"
            />
          </div>
          <div>
            <h5 style={{ fontWeight: "400" }}>И-мэйл</h5>
            <input
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
                paddingLeft: "20px",
              }}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="И-мэйлээ бичнэ үү"
            />
          </div>

          <div>
            <h5 style={{ fontWeight: "400" }}>Нууц үг</h5>
            <input
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
                paddingLeft: "20px",
              }}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Нууц үг бичнэ үү"
            />
          </div>
          <div>
            <h5 style={{ fontWeight: "400" }}>Нууц үг давтна уу</h5>
            <input
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
                paddingLeft: "20px",
              }}
              onChange={(e) => setRepassword(e.target.value)}
              type="password"
              placeholder="Нууц үг давтна уу"
            />
          </div>
          <div className="text-danger">{err}</div>
          <Buton
            onclicker={UserCreator}
            content={"Бүртгүүлэх"}
            width={"100%"}
            height={"5vh"}
          ></Buton>
        </div>
      </div>
    </div>
  );
};
