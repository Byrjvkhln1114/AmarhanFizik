import { Drop } from "./Dropdown";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div
      className="text-light"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "10%",
        alignItems: "center",
      }}
    >
      <div
        className=""
        style={{
          width: "75vw",
          backgroundColor: "",
        }}
      >
        <div
          style={{
            height: "7vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to={"/"}>
            <img style={{ height: "60px" }} src="Logo.png" alt="" />
          </Link>

          <div className="w-40vw" style={{ width: "55vw" }}>
            <div className="d-flex justify-content-end  gap-5">
              {" "}
              <div> Томьёо</div>
              <div>Хэлхээ</div>
              <div>Тайлбар толь</div>
            </div>
          </div>
          <Drop></Drop>
        </div>
      </div>
    </div>
  );
};
