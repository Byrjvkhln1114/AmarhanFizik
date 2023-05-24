import { useState } from "react";
import { Header, Footer } from "../component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./mystyles.css";
export const Home = () => {
  const Navigate = useNavigate("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="">
      <div
        className=" d-flex flex-column align-items-center text-light gap-5 home8"
        style={{ background: "#1f1f47", height: "96vh", width: "100vw" }}
      >
        <Header></Header>

        <Modal className="w-100" show={show} onHide={handleClose}>
          <div
            style={{
              backgroundColor: "#1f1f47",
              borderRadius: "7px",
              border: "4px solid #f3573c",
            }}
            className="text-light"
          >
            <Modal.Body>
              <h5>Ta ene uildliig hiihin tuld ehled nevtreh heregtei </h5>
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ background: "#f3573c", border: "none" }}
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                style={{
                  border: "2px solid #f3573c",
                  background: "transparent",
                }}
                onClick={() => Navigate("/login")}
              >
                Login
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
        <div className="w-100 d-flex flex-column align-items-center text-light home6">
          <h1 className="mt-5 home5">
            Физик бол асуудал
            <span className="ms-2 " style={{ color: "#f3573c" }}>
              БИШ !
            </span>
          </h1>

          <div className="d-flex w-75 justify-content-between align-items-center home7">
            <div
              onClick={() =>
                localStorage.getItem("user")
                  ? Navigate("/formula")
                  : handleShow()
              }
              className="d-flex flex-column align-items-center gap-5 justify-content-center text-light home1"
            >
              <div className="d-flex flex-column align-items-center gap-5 justify-content-center home2">
                <img style={{ height: "60%" }} src="formula.png"></img>
                <h2 className="home2-1">Томьёо</h2>
              </div>
            </div>
            <Link
              className="d-flex flex-column align-items-center gap-5 justify-content-center text-light home13"
              to={"definition"}
            >
              <div className="d-flex flex-column align-items-center gap-5 justify-content-center home3">
                <img style={{ height: "60%" }} src="Definition.png"></img>
                <h2 className="home3-1">Definition </h2>
              </div>
            </Link>
            <Link
              className="d-flex flex-column align-items-center gap-5 justify-content-center text-light home14"
              to={"/Aboutus"}
            >
              <div className="d-flex flex-column align-items-center gap-5 justify-content-center home4">
                <img style={{ height: "60%" }} src="team.png"></img>
                <h2 className="home4-1">About us</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
