import { Buton } from "./buton";
export const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className=""
        style={{
          width: "75vw",
          backgroundColor: "gray",
        }}
      >
        {/* header */}
        <div
          style={{
            height: "7vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img style={{ height: "60px" }} src="Logo.png" alt="" />
          <div>sdfghukijlhufdghuijuytrdfsfghugyftdrfsfghu</div>

          <Buton></Buton>
        </div>
      </div>
    </div>
  );
};
