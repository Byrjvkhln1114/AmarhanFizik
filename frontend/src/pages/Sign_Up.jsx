import { Buton } from "../component/Buton";
import { Header, Footer } from "../component";

export const Sign_Up = () => {
  return (
    <div>
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
                type="password"
                placeholder="Нууц үг давтна уу"
              />
            </div>

            <Buton content={"Бүртгүүлэх"} width={"100%"} height={"5vh"}></Buton>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
