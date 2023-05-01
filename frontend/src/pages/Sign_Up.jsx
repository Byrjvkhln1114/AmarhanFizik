import { Buton } from "../component/buton";
import { Header, Footer } from "../component";
import "./mystyles.css";
export const Sign_Up = () => {
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
          <div
            className=" d-flex flex-column justify-content-around sign6"
          >
            <div>
              <h5 style={{ fontWeight: "400" }} >Хэрэглэгчийн нэр</h5>
              <input
                className="sign2"
                type="text"
                placeholder="Хэрэглэгчийн нэрээ бичнэ үү"
              />
            </div>
            <div>
              <h5 style={{ fontWeight: "400" }}>И-мэйл</h5>
              <input
                className="sign3"
                type="email"
                placeholder="И-мэйлээ бичнэ үү"
              />
            </div>

            <div>
              <h5 style={{ fontWeight: "400" }}>Нууц үг</h5>
              <input
                className="sign4"
                type="password"
                placeholder="Нууц үг бичнэ үү"
              />
            </div>
            <div>
              <h5 style={{ fontWeight: "400" }}>Нууц үг давтна уу</h5>
              <input
                className="sign5"
                type="password"
                placeholder="Нууц үг давтна уу"
              />
            </div>

            <div className="sign8"><Buton content={"Бүртгүүлэх"} width={"100%"} height={"5vh"}></Buton></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
