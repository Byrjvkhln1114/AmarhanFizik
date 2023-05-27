// import { Buton } from "../component/buton";
// import { Header, Footer } from "../component";
// import { Link } from "react-router-dom";
import { Header } from "../component/header";
import "./mystyles.css";

export const About = () => {
  return (
    <div
      style={{
        backgroundColor: "#1f1f47",
        height: "100vh",
        width: "100vw",
        color: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Header></Header>
      <div
        style={{
          width: "80vw",
          height: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "7vh",
              fontSize: "5vh",
            }}
          >
            Манай багийн гишүүдтэй холбогдох
          </div>
          <div
            style={{
              display: "flex",
              width: "80vw",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                border: "1px solid white ",
                borderRadius: "10px",
                flexDirection: "column",
                backgroundColor: "#2B2B52",
              }}
            >
              <div
                style={{
                  height: "31vh",
                  width: "15vw",
                  display: "flex",
                  justifyContent: "center",
                  padding: "2vh",
                }}
              >
                <img
                  style={{ height: "28vh", borderRadius: "10px" }}
                  src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
                  alt=""
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                <h2>Баяржавхлан</h2>
                <div style={{ display: "flex", gap: "1vh" }}>
                  <a
                    href="https://instagram.com/byrjvkln?igshid=ZWQyN2ExYTkwZQ=="
                    target="_blank"
                  >
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100076193163624"
                    target="_blank"
                  >
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://assets.stickpng.com/images/60fea6773d624000048712b5.png"
                      alt=""
                    />
                  </a>
                  <a href="https://github.com/Byrjvkhln1114" target="_blank">
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid white ",
                borderRadius: "10px",
                flexDirection: "column",
                backgroundColor: "#2B2B52",
              }}
            >
              <div
                style={{
                  height: "31vh",
                  width: "15vw",
                  display: "flex",
                  justifyContent: "center",
                  padding: "2vh",
                }}
              >
                <img
                  style={{
                    height: "28vh",
                    borderRadius: "10px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  src="elberel.png"
                  alt=""
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                <h2>Элбэрэл</h2>
                <div style={{ display: "flex", gap: "1vh" }}>
                  <a href="https://www.instagram.com/elbrll__/" target="_blank">
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/lbrl.elberel"
                    target="_blank"
                  >
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://assets.stickpng.com/images/60fea6773d624000048712b5.png"
                      alt=""
                    />
                  </a>
                  <a href="https://github.com/elbrl" target="_blank">
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid white ",
                borderRadius: "10px",
                flexDirection: "column",
                backgroundColor: "#2B2B52",
              }}
            >
              <div
                style={{
                  height: "31vh",
                  width: "15vw",
                  display: "flex",
                  justifyContent: "center",
                  padding: "2vh",
                }}
              >
                <img
                  style={{ height: "28vh", borderRadius: "10px" }}
                  src="https://scontent.fuln1-1.fna.fbcdn.net/v/t1.6435-9/81537081_2578723012246855_3291626626000879616_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=auQLrmMT-nkAX-SNIR_&_nc_ht=scontent.fuln1-1.fna&oh=00_AfBBwHmu3DRYc50xXwYJU2ShCM2ejYrxJuXpNBPQYl21kg&oe=6498F89C"
                  alt=""
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                <h2>Чинбо</h2>
                <div style={{ display: "flex", gap: "1vh" }}>
                  <a
                    href="https://www.instagram.com/nolimitchinbo/"
                    target="_blank"
                  >
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/chinbolor.enkhjargal"
                    target="_blank"
                  >
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://assets.stickpng.com/images/60fea6773d624000048712b5.png"
                      alt=""
                    />
                  </a>{" "}
                  <a href="https://github.com/Chinbo09" target="_blank">
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                border: "1px solid white ",
                borderRadius: "10px",
                flexDirection: "column",
                backgroundColor: "#2B2B52",
              }}
            >
              <div
                style={{
                  height: "31vh",
                  width: "15vw",
                  display: "flex",
                  justifyContent: "center",
                  padding: "2vh",
                }}
              >
                <img
                  style={{ height: "28vh", borderRadius: "10px" }}
                  src="https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-6/221397710_886313845255102_6510785775220678317_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lH43KhTChTcAX9h_8QX&_nc_ht=scontent.fuln1-2.fna&oh=00_AfAZkcgDDa0p5husGD4OnUFEWwoL7ZSok0L3Az6DxRxfqQ&oe=64776ABC"
                  alt=""
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: "20px",
                  gap: "20px",
                }}
              >
                <h2>Тэмүүжин</h2>
                <div style={{ display: "flex", gap: "1vh" }}>
                  <a
                    href="https://www.instagram.com/tmjn_nasa/"
                    target="_blank"
                  >
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/temujin.temujjn/"
                    target="_blank"
                  >
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://assets.stickpng.com/images/60fea6773d624000048712b5.png"
                      alt=""
                    />
                  </a>{" "}
                  <a href="https://github.com/Piroshki69" target="_blank">
                    <img
                      className="w-[30px] sm:w-[30px]"
                      src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
