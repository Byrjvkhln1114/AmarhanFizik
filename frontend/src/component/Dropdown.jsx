import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
export const Drop = ({ content }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        style={{
          backgroundColor: "rgb(243, 87, 60)",
          border: "none",
          height: "60px",
          width: "200px",
          borderRadius: "10px",
        }}
      >
        Username
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: "200px" }}>
        <Link style={{ textDecoration: "none" }} to="/formula">
          <Dropdown.Item href="#/action-1">Томьёо</Dropdown.Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/login">
          <Dropdown.Item href="#/action-2">Нэвтрэх</Dropdown.Item>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/signup">
          <Dropdown.Item href="#/action-2">Бүртгүүлэх</Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
};
