import { Header, Footer } from "../component";
import { useState, useEffect } from "react";
import axios from "axios";
export const User = () => {
  const [liked, setLiked] = useState([]);
  const likedposts = async () => {
    const ahha = await axios.post("http://localhost:8000/Userfinder", {
      uid: JSON.parse(localStorage.getItem("user"))._id,
    });
    setLiked(ahha?.data?.LikedPosts);
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
        <div>
          <h2>Saved posts:</h2>
          <div>
            {liked.map((el) => {
              return <div></div>;
            })}
            {/* <button onClick={findFormula}>ada</button> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
