import { Buton } from "../component/buton";
import { Header, Footer } from "../component";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mystyles.css";
export const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [Loading, setLoading] = useState(false);

  const Login = async () => {
    setLoading(true);
    if (Password != "" && Email != "") {
      const result = await axios.post(
        "https://amarhan-physics.vercel.app/login",
        {
          Email: Email,
          Password: Password,
        }
      );
      if (typeof result.data === "object") {
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
        window.location.reload();
      } else {
        setErr(result?.data);
        // /Users/imac-22/.ssh/id_ed25519
      }
    } else {
      setErr("Fill the field");
    }
    setLoading(false);
  };
  return (
    <div>
      <div
        style={{ background: "#1f1f47", height: "100vh" }}
        className="d-flex flex-column  align-items-center "
      >
        <Header></Header>
        <div className="d-flex justify-content-center align-items-center flex-column login1">
          <div className="login7">
            <p style={{ fontSize: "25px", fontWeight: "300" }}>Тавтай морил!</p>
          </div>
          <p style={{ color: "#1F1F47", fontSize: "40px" }}>Нэвтрэх</p>
          <div className=" d-flex flex-column justify-content-around login6">
            <div>
              <h5 style={{ fontWeight: "400" }}>И-мэйл</h5>
              <input
                className="login2"
                type="email"
                placeholder="И-мэйлээ бичнэ үү"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <h5 style={{ fontWeight: "400" }}>Нууц үг</h5>
              <input
                className="login3"
                type="password"
                placeholder="Нууц үг бичнэ үү"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link style={{ textDecoration: "none" }} to="/forgot">
                  <h5 className="login4">Нууц үг мартсан?</h5>
                </Link>
              </div>
            </div>
            <div className="text-danger w-100 d-flex justify-content-center">
              {err}
            </div>

            <Buton
              onclicker={Login}
              content={Loading == true ? "Loading" : "Нэвтрэх"}
              width={"100%"}
              height={"5vh"}
            ></Buton>

            <h5 className="login5">
              <span style={{ color: "#7D7D7D" }}>Та бүртгэлтэй юу? ㅤ</span>
              <Link style={{ textDecoration: "none" }} to="/signup">
                <span style={{ color: "#F3573C" }}>БҮРТГҮҮЛЭХ</span>
              </Link>
              ㅤ
            </h5>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
