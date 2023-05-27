import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-main w-[100vw] h-[400px] bg-[#181837] ">
      <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-evenly ">
        <div className="footeras flex sm:flex-col items-center gap-5 mt-[50px]">
          <Link to="/">
            <img className="rotate h-[130px] w-[120px]" src="Logo.png" alt="" />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Aboutus">
            <div
              style={{ transition: ".4s" }}
              className="w-[140px] sm:w-[200px] md:w-[23vw] 2xl:w-[20vw] h-[60px] flex justify-center items-center text-[#f3573c] text-[22px] border-[5px] border-[#f3573c] hover:bg-[#f3573c] hover:text-white"
            >
              Contact Us
            </div>
          </Link>
        </div>
        <div className=" mt-[20px] gap-5 flex flex-row justify-evenly footer">
          <div className="flex flex-row mt-[3vh] w-[120px] sm:w-[100%]">
            <div className="w-[2px] h-[150px] sm:h-[300px] bg-[#f3573c]"></div>
            <div className="flex flex-col justify-evenly h-[150px] sm:h-[300px]">
              <Link to="/" className="no-underline">
                <div
                  style={{ transition: ".4s" }}
                  className="w-[100px] md:w-[120px] text-[#f3573c] flex justify-start ml-[2vw] items-center text-[10px] sm:text-[20px] pt-1 pb-1 hover:bg-[#f3573c] hover:text-white"
                >
                  HOME
                </div>
              </Link>
              <Link to="/Formula" className="no-underline">
                <div
                  style={{ transition: ".4s" }}
                  className="no-underline w-[100px] md:w-[120px] text-[#f3573c] flex justify-start ml-[2vw] items-center text-[10px] sm:text-[20px] pt-1 pb-1 hover:bg-[#f3573c] hover:text-white"
                >
                  FORMULA
                </div>
              </Link>
              <Link to="/Definition" className="no-underline">
                <div
                  style={{ transition: ".4s" }}
                  className="no-underline sm:w-[105px] w-[100px] md:w-[120px] text-[#f3573c] flex justify-start ml-[2vw] items-center text-[10px] sm:text-[20px] pt-1 pb-1 hover:bg-[#f3573c] hover:text-white"
                >
                  DEFINITION
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-row mt-[3vh] w-[140px]">
            <div className="w-[2px] h-[150px] sm:h-[300px] bg-[#f3573c]"></div>
            <div className="flex flex-col justify-evenly h-[150px] sm:h-[300px] ml-[20px]">
              <a
                href="https://www.instagram.com/pineconemongolia/"
                target="_blank"
              >
                <img
                  className="w-[30px] sm:w-[50px]"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/pinecone.academy.mongolia"
                target="_blank"
              >
                <img
                  className="w-[30px] sm:w-[50px]"
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384168.png"
                  alt=""
                />
              </a>
              <a
                href="https://github.com/Byrjvkhln1114/AmarhanFizik"
                target="_blank"
              >
                <img
                  className="w-[30px] sm:w-[50px]"
                  src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
