import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { buton } from "../component/buton";
export const Drop = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle className="dropdown1 " id="dropdown-basic">
        {localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user")).Username
          : "Login"}
      </Dropdown.Toggle>
      {JSON.parse(localStorage.getItem("user")) ? (
        <Dropdown.Menu
          style={{
            width: "200px",

            border: "1px solid black",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/formulainput">
            <Dropdown.Item href="#/action-2">EnterFormula</Dropdown.Item>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/User">
            <Dropdown.Item href="#/action-2">User Info</Dropdown.Item>
          </Link>
          <Dropdown.Item
            onClick={() => (localStorage.clear(), window.location.reload())}
            href="#/action-2"
            className="text-danger"
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
