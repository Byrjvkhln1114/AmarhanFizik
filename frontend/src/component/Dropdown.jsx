import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Buton } from "../component/Buton";
export const Drop = () => {
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
        {localStorage.getItem("username")
          ? localStorage.getItem("username")
          : "Login"}
      </Dropdown.Toggle>

      {localStorage.getItem("username") ? (
        <Dropdown.Menu style={{ width: "200px" }}>
          <Dropdown.Item
            onClick={() => (localStorage.clear(), window.location.reload())}
            href="#/action-2"
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      ) : (
        <Dropdown.Menu style={{ width: "200px" }}>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Dropdown.Item href="#/action-2">Нэвтрэх</Dropdown.Item>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <Dropdown.Item href="#/action-2">Бүртгүүлэх</Dropdown.Item>
          </Link>
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};
