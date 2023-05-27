import { Drop } from "./Dropdown";
import { Link } from "react-router-dom";
import "./styles.css";
export const Header = () => {
  return (
    <div className="text-light mt-4">
      <div className="header2">
        <div className="header3">
          <Link to={"/"}>
            <div style={{ width: "60px", height: "60px" }}>
              <img className="header4 rotate " src="Logo.png" alt="" />
            </div>
          </Link>

          <div className="w-40vw header5">
            <div className="d-flex justify-content-end header6"></div>
          </div>
          <Drop></Drop>
        </div>
      </div>
    </div>
  );
};
