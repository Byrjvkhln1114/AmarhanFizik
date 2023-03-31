import { Buton } from "../component/Buton";
import { Header } from "../component/header";

export const Login = () => {
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
          <p style={{ fontSize: "25px", fontWeight: "300" }}>Welcome !</p>
        </div>
        <p style={{ color: "#1F1F47", fontSize: "50px" }}>Login</p>
        <div
          style={{ height: "45vh", width: "20vw" }}
          className=" d-flex flex-column justify-content-around"
        >
          <div>
            <h5 style={{ fontWeight: "400" }}>email</h5>
            <input
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
              }}
              type="email"
            />
          </div>
          <div>
            <h5 style={{ fontWeight: "400" }}>Password</h5>
            <input
              style={{
                border: "1px solid black",
                outline: "none",
                width: "20vw",
                height: "5vh",
                borderRadius: "5px",
              }}
              type="password"
            />{" "}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <h5
                style={{
                  justifyContent: "end",
                  color: "#F3573C",
                  fontWeight: "300",
                }}
              >
                Forgot password ?
              </h5>
            </div>
          </div>

          <Buton content={"Login"} width={"100%"} height={"60px"}></Buton>

          <h5
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              color: "#F3573C",
            }}
          >
            <span style={{ color: "#7D7D7D" }}>Do you have an Account ?</span>ㅤ
            SIGN UP
          </h5>
        </div>
      </div>
    </div>
  );
};
