import { Buton } from "../component/buton";
import { Header, Footer } from "../component";
import { Link } from "react-router-dom";
import "./mystyles.css";

export const Forgot = () => {
  return (
    <div>
      <div className="d-flex flex-column  align-items-center forgot1">
        <Header></Header>
        <div className="d-flex justify-content-center align-items-center flex-column forgot2">
          <div className="w-75">
            <p className="forgot3">Тавтай морил!</p>
          </div>
          <p className="forgot4">Нууц үг мартсан?</p>
          <div className=" d-flex flex-column justify-content-around forgot5">
            <div>
              <h5 style={{ fontWeight: "400" }}>И-мэйл</h5>
              <input
                className="forgot6"
                type="email"
                placeholder="И-мэйлээ бичнэ үү"
              />
            </div>
            <div>
              <h5 style={{ fontWeight: "400" }}>Нууц үг</h5>
              <input className="forgot7" type="email" placeholder="Нууц үг" />
            </div>
            <div>
              <h5 style={{ fontWeight: "400" }}>Нууц үг давтах</h5>
              <input
                className="forgot8"
                type="email"
                placeholder="Нууц үг давтах"
              />
            </div>
            <Buton
              content={"Нууц үг сэргээх"}
              width={"100%"}
              height={"5vh"}
            ></Buton>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
