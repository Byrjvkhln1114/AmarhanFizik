import { Drop } from "./Dropdown";
import { Link } from "react-router-dom";
import "./styles.css"
export const Header = () => {
  return (
    <div className="text-light header1">
      <div
        className="header2"
      >
        <div className="header3">
          <Link to={"/"}>
            <img className="header4" src="Logo.png" alt="" />
          </Link>

          <div className="w-40vw header5" >
            <div className="d-flex justify-content-end  gap-5">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/formula"}
              >
                {" "}
                <div> Томьёо</div>{" "}
              </Link>
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
