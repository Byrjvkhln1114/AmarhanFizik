import { Header, Footer } from "../component";
import "./mystyles.css";

export const Definition = () => {
  return (
    <div>
      <div
        style={{ background: "#1f1f47" }}
        className="d-flex flex-column  align-items-center "
      >
        <Header></Header>
        <div
          className="App"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            width: "100vw",

            color: "white",
          }}
        >
          <div
            style={{
              width: "60vw",
              height: "35vh",
              // backgroundColor: "#222222",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Кинематик
              </div>
            </div>
            <div
              style={{
                marginLeft: "50px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Кинематикийн ойлголтууд
              </div>
              <div>
                <ul style={{ listStyleType: "circle", fontSize: "23px" }}>
                  <li>Зай: нийт урт нь чиглэлээс үл хамааран хөдөлсөн</li>
                  <li>
                    Нүүлгэн шилжүүлэлт: тодорхой чиглэлд хамгийн богино зай
                  </li>
                  <li>Coca Cola</li>
                  <li>Хурд: нэгж хугацаанд туулсан зам, чиглэлгүй</li>
                  <li>Хурд: нүүлгэн шилжүүлэлтийн өөрчлөлтийн хурд</li>
                  <li>Хурдатгал: хурдны өөрчлөлтийн хурд</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "60vw",
              height: "35vh",
              // backgroundColor: "#222222",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "50px" }}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Кинематик тэгшитгэл
              </div>
              <div
                style={{
                  fontSize: "23px",
                }}
              >
                <p>s = ut + at²/2</p>
                <p>v = u + at</p>
                <p>v² = u² + 2as</p>
                <p>s = (v₁ + v₂)/2 × t</p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "60vw",
              height: "50vh",
              // backgroundColor: "#222222",
            }}
          >
            <div style={{ marginLeft: "50px" }}>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Linear Motion
              </div>
              <div>
                <ul style={{ listStyleType: "circle", fontSize: "23px" }}>
                  <li>Зай: нийт урт нь чиглэлээс үл хамааран хөдөлсөн</li>
                  <li>
                    Нүүлгэн шилжүүлэлт: тодорхой чиглэлд хамгийн богино зай
                  </li>
                  <li>Coca Cola</li>
                  <li>Хурд: нэгж хугацаанд туулсан зам, чиглэлгүй</li>
                  <li>Хурд: нүүлгэн шилжүүлэлтийн өөрчлөлтийн хурд</li>
                  <li>Хурдатгал: хурдны өөрчлөлтийн хурд</li>
                  <li>Шилжилтийн хугацааны график:</li>
                </ul>
                <p style={{ fontSize: "20px", marginLeft: "60px" }}>
                  Градиент = хурд
                </p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ backgroundColor: "white" }}
                src="https://znotes-static.s3.amazonaws.com/cie/as/physics-9702/635f9f2fc90bdc119bfc52cf374f275e2d6db6abe453bfce.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
