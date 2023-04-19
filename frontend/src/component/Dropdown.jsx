import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { buton } from "../component/buton";
export const Drop = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="dropdown1" id="dropdown-basic">
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
