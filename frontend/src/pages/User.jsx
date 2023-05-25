import { Header, Footer } from "../component";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export const User = () => {
  const [liked, setLiked] = useState([]);
  const Navigate = useNavigate("");
  const likedposts = async () => {
    const a = JSON.parse(localStorage.getItem("user"))._id;

    const data = await axios.post(
      `https://amarhan-physics.vercel.app/Userfinder/6461f6eeee11336fce35673d`
    );
    const result = await axios.post(
      "https://amarhan-physics.vercel.app/FindLikedFormulasById",
      {
        ids: data?.data?.LikedPosts,
      }
    );
    setLiked(result?.data);
  };
  const edit = async (id) => {
    const result = await axios.post("https://amarhan-physics.vercel.app/findformula", {
      _id: id,
    });
    localStorage.setItem("formula", JSON.stringify(result.data));
    Navigate("/formuladetail");
  };
  useEffect(() => {
    likedposts();
  }, []);
  return (
    <div>
      <div
        style={{ background: "#1f1f47", height: "100vh" }}
        className="d-flex flex-column  align-items-center text-light"
      >
        <Header></Header>
        <h1>Hello {JSON.parse(localStorage.getItem("user")).Username}</h1>
        <div className="d-flex gap-2 flex-column w-75">
          <h2>Saved posts:</h2>
          <div className="d-flex gap-5 ">
            {liked.map((el, i) => {
              return (
                <div
                  className="d-flex justify-content-center align-items-center fs-5 formula2"
                  key={i}
                  onClick={() => edit(el?._id)}
                >
                  {el?.Equation[0]}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
