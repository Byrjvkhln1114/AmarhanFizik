import { Buton } from "../component/Buton";
import { Header, Footer } from "../component";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Sign_Up = () => {
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [err, setErr] = useState("");
  const [errcode, setErrcode] = useState("");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  setTimeout(() => {
    setErr("");
  }, 7000);
  const Signup = async () => {
    if (Username.length > 1 && Username.length < 15) {
      if (Password.length < 20 && Password.length > 5) {
        if (repassword == Password) {
          setLoading(true);
          const result = await axios.post("http://localhost:8000/signup", {
            Email: Email,
            Username: Username,
            Password: Password,
          });
          if (result.data == "success") {
            navigate("/login");
            alert("Signed up successfully");
          }
        } else {
          setErr("Password and reenter dont match");
        }
      } else {
        setErr("Password should contains character between 6-21");
        setErrcode("b");
      }
    } else {
      setErr("Username should contains character between 2-14");
      setErrcode("a");
    }
  };

  return (
    <div>
      <div
        style={{ background: "#1f1f47", height: "100vh" }}
        className="d-flex flex-column  align-items-center "
      >
        <Header></Header>
        {Loading == true ? (
          <div className="text-light">Loading</div>
        ) : (
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
              <p style={{ fontSize: "25px", fontWeight: "300" }}>
                Тавтай морил!
              </p>
            </div>
            <p style={{ color: "#1F1F47", fontSize: "40px" }}>Бүртгүүлэх</p>
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
                <div className="text-danger">{errcode == "a" ? err : ""}</div>
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
                  type="password"
                  placeholder="Нууц үг бичнэ үү"
                  onChange={(e) => setPassword(e.target.value)}
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
                <div className="text-danger">{errcode == "b" ? err : ""}</div>
              </div>
              <Link style={{ textDecoration: "none" }} to={"/login"}>
                <div
                  className="w-100 d-flex justify-content-end mt-2 mb-2"
                  style={{ color: "rgb(243, 87, 60)", cursor: "pointer" }}
                >
                  Already have a account?
                </div>
              </Link>
              <Buton
                onclicker={Signup}
                content={"Бүртгүүлэх"}
                width={"100%"}
                height={"5vh"}
              ></Buton>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};
