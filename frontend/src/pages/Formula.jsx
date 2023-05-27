import { useEffect, useState, useContext } from "react";
import { Header, Footer } from "../component";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./mystyles.css";
import axios from "axios";
export const Formula = () => {
  const [allequations, setAllequations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState();
  const [unselect, setunselect] = useState(false);
  const [more, setMore] = useState(null);
  const [arrow, setArrow] = useState(true);
  const [id, setId] = useState(true);
  const [shaded, unShaded] = useState(false);
  const [l, setl] = useState(false);
  const [liked, setLiked] = useState([]);
  const [likedimg, setLikedimg] = useState(false);
  const [show, setShow] = useState(false);
  const [likemsg, setlikemsg] = useState(false);
  const [car, setCar] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const symbol_datas = [
    "Хүч",
    "Хурд",
    "Хурдатгал",
    "Нягт",
    "Чадал",
    "Жин",
    "Даралт",
    "Кинетик энерги",
    "Хүчдэл",
    "Долгионы давтамж",
    "Масс",
    "Татах хүч",
    "Зам",
    "Хугацаа",
    "Анхны хурд",
    "Эзлэхүүн",
    "Ажил",

    "Гүйдэл",
    "Эсэргүүцэл",
    "Долгионы хурд",
  ];

  const Navigate = useNavigate("");
  const check = 0;
  useEffect(() => {
    (async () => {
      formulagetter();
    })();
  }, [check]);
  const formulagetter = async (filt, i) => {
    const all = await axios.post(
      "https://amarhan-physics.vercel.app/allformula",
      {
        filt: filt,
      }
    );
    setAllequations(all);
    setLoading(false);
    if (unselect == true) {
      setSelect();
      formulagetter();
      window.location.reload();
    }
  };
  const moreFormulas = async (id) => {
    const more = await axios.post(
      "https://amarhan-physics.vercel.app/findmoreformulas",
      {
        branches: id,
      }
    );
    setMore(more.data);
    setArrow(!arrow);
  };
  const edit = async (id) => {
    const result = await axios.post(
      "https://amarhan-physics.vercel.app/findformula",
      {
        _id: id,
      }
    );
    localStorage.setItem("formula", JSON.stringify(result.data));
    Navigate("/formuladetail");
  };

  const liker = async (_id, or) => {
    await likedposts();
    const a = await axios.patch(
      "https://amarhan-physics.vercel.app/Formulaliker",
      {
        _id: _id,
        or: liked.includes(_id) ? false : true,
        uid: JSON.parse(localStorage.getItem("user"))._id,
      }
    );
    await unShaded(!shaded);
    await setlikemsg(a?.data);
    await handleShow();
    await likedposts();
    await setLikedimg(!likedimg);
    await formulagetter();
  };

  const likedposts = async () => {
    const a = await JSON.parse(localStorage.getItem("user"))._id;
    const ahha = await axios.post(
      `https://amarhan-physics.vercel.app/Userfinder/${a}`
    );
    setLiked(ahha?.data?.LikedPosts);
  };
  useEffect(() => {
    likedposts();
  }, []);
  const Carousel = async (check) => {
    if (check) {
      if (car != 0) {
        setCar(car + 30);
      }
    } else {
      setCar(car - 30);
    }
  };

  return localStorage.getItem("user") ? (
    <div>
      <div
        style={{ width: "100vw", minHeight: "96vh" }}
        className="d-flex flex-column align-items-center formula1 pt-2"
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
              <h5>{likemsg}</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ background: "#f3573c", border: "none" }}
                onClick={() => handleClose()}
              >
                Ok
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
        {loading == true ? (
          <div
            style={{ color: "rgb(243, 87, 60" }}
            className="w-100 d-flex justify-content-center align-items-center"
          >
            <h1> Loading...</h1>
          </div>
        ) : (
          <div className="w-75 d-flex flex-column gap-2 mt-5">
            <div className="d-flex">
              <button
                style={{
                  border: "1px solid rgb(243, 87, 60)",
                  borderRadius: "5px",
                }}
                className="px-2 pt-1 pb-1 formula5  mr-3 text-light"
                onClick={() => window.location.reload()}
              >
                Бүгд
              </button>

              <button
                style={{
                  borderRadius: "5px 0px 0px 5px",
                  backgroundColor: "#f3573c",
                  color: "#1f1f47",
                }}
                onClick={() => Carousel(true)}
                className=" d-flex align-items-center mr-2"
              >
                {"<<"}
              </button>
              <div className="w-100" style={{ overflow: "scroll" }}>
                <div
                  style={{
                    marginLeft: car + "%",
                    transition: "1s",
                  }}
                  className="d-flex text-light gap-3 w-100"
                >
                  {symbol_datas.map((el, i) => {
                    return (
                      <button
                        id={i}
                        style={{
                          border: "1px solid rgb(243, 87, 60)",
                          borderRadius: "5px",
                          background: i == select ? "rgb(243, 87, 60)" : "",
                          width: "100px",
                        }}
                        className="px-2 pt-1 pb-1 formula5"
                        onClick={() => (formulagetter(el, i), setSelect(i))}
                      >
                        {el}
                      </button>
                    );
                  })}
                </div>
              </div>
              <button
                style={{
                  borderRadius: "0px 5px 5px 0px",
                  backgroundColor: "#f3573c",
                  color: "#1f1f47",
                }}
                onClick={() => Carousel(false)}
                className=" d-flex align-items-center ml-2"
              >
                {">>"}
              </button>
            </div>
            <div
              style={{ display: "flex", flexWrap: "wrap" }}
              className=" w-100 mt-5 d-flex gap-5 text-light justify-content-center "
            >
              {allequations?.data?.map((el, i) => {
                if (el.Branches[0] != "aaasda") {
                  return (
                    <div className="d-flex flex-column gap-3 ">
                      <div className="d-flex flex-column">
                        <div
                          className="d-flex justify-content-center align-items-center fs-5 formula2"
                          key={i}
                          onClick={() => edit(el?._id)}
                        >
                          {el?.Equation[0]}
                        </div>
                        <div className="d-flex w-100 justify-content-around">
                          <div className=" d-flex m-2 gap-1 justify-content-center align-items-center">
                            <div className="liked_number_hover text-success d-flex justify-content-center align-items-center">
                              {el?.Likes}
                            </div>

                            <div
                              style={{
                                border: "3px solid rgb(243, 87, 60)",
                                borderRadius: "5px",
                                backgroundColor: "white",
                                height: "50px",
                              }}
                              className="liked_number text-dark  "
                            >
                              Хадгалсан хүний тоо
                            </div>
                          </div>
                          {liked.includes(el._id) ||
                          (likedimg == true && el?._id == l) ? (
                            <button
                              id={i}
                              onClick={() => (
                                liker(el?._id, false, i), setl(el?._id)
                              )}
                              style={{
                                color: "rgb(243, 87, 60)",
                              }}
                              className="mt-2 px-2 pt-1 pb-1   mr-3 "
                            >
                              хадгалсан
                            </button>
                          ) : (
                            <button
                              id={i}
                              onClick={() => (
                                liker(
                                  el?._id,
                                  shaded == true ? false : true,
                                  i
                                ),
                                setl(el?._id)
                              )}
                              style={{
                                backgroundColor: "rgb(243, 87, 60)",
                                border: "1px solid rgb(243, 87, 60)",
                                borderRadius: "4px",
                              }}
                              className="mt-2 px-2 pt-1 pb-1 liked  mr-3 text-light"
                            >
                              хадгалах
                            </button>
                          )}

                          <button
                            className="d-flex ml-2 flex-column  justify-content-center align-items-center"
                            onClick={() => (
                              moreFormulas(el.Branches), setId(el?._id)
                            )}
                          >
                            {arrow == false && id == el?._id ? " ↑" : "↓"}
                          </button>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-3">
                        {more?.map((ej, l) => {
                          return (
                            <div
                              className="flex-column"
                              style={{
                                display:
                                  arrow == false && id == el?._id
                                    ? "flex"
                                    : "none",
                              }}
                            >
                              <div
                                className="d-flex justify-content-center align-items-center fs-5 formula2"
                                key={l}
                                onClick={() => edit(ej?._id)}
                              >
                                <div> {ej?.Equation[0]}</div>
                              </div>
                              <div className="d-flex w-100 justify-content-around">
                                <div className=" d-flex m-2 gap-1 justify-content-center align-items-center">
                                  <div className="liked_number_hover text-success d-flex justify-content-center align-items-center">
                                    {el?.Likes}
                                  </div>
                                  <div
                                    style={{
                                      border: "3px solid rgb(243, 87, 60)",
                                      borderRadius: "5px",
                                      backgroundColor: "white",
                                      height: "50px",
                                    }}
                                    className="liked_number text-dark  "
                                  >
                                    Хадгалсан хүний тоо
                                  </div>
                                </div>
                                {liked.includes(ej._id) ||
                                (likedimg == true && ej?._id == l) ? (
                                  <button
                                    id={i}
                                    onClick={() => (
                                      liker(
                                        ej?._id,
                                        shaded == true ? false : true,
                                        i
                                      ),
                                      setl(ej?._id)
                                    )}
                                    style={{
                                      color: "rgb(243, 87, 60)",
                                    }}
                                    className="mt-2 px-2 pt-1 pb-1   mr-3 "
                                  >
                                    хадгалсан
                                  </button>
                                ) : (
                                  <button
                                    id={i}
                                    onClick={() => (
                                      liker(
                                        ej?._id,
                                        shaded == true ? false : true,
                                        i
                                      ),
                                      setl(ej?._id)
                                    )}
                                    style={{
                                      backgroundColor: "rgb(243, 87, 60)",
                                      border: "1px solid rgb(243, 87, 60)",
                                      borderRadius: "4px",
                                    }}
                                    className="mt-2 px-2 pt-1 pb-1 liked  mr-3 text-light"
                                  >
                                    хадгалах
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  ) : (
    <div>Login first</div>
  );
};
