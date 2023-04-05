import { Buton } from "../component/Buton";
import { Header } from "../component/header";
import { Link } from "react-router-dom";

export const Forgot = () => {
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
        <p style={{ color: "#1F1F47", fontSize: "50px" }}>Нууц үг мартсан?</p>
        <div
          style={{ height: "35vh", width: "20vw" }}
          className=" d-flex flex-column justify-content-around"
        >
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
              type="email"
              placeholder="Нууц үг"
            />
          </div>
          <div>
            <h5 style={{ fontWeight: "400" }}>Нууц үг давтах</h5>
            <input
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
                paddingLeft: "20px",
              }}
              type="email"
              placeholder="Нууц үг давтах"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
