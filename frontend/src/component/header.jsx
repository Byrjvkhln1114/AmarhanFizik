import { Buton } from "./Buton";
export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "10%",
        alignItems: "center",
      }}
    >
      <div
        className=""
        style={{
          width: "75vw",
          backgroundColor: "",
        }}
      >
        <div
          style={{
            height: "7vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img style={{ height: "60px" }} src="Logo.png" alt="" />
          <div className="w-40vw" style={{ width: "50vw" }}>
            <div className="d-flex justify-content-end  gap-5">
              {" "}
              <div>Formula</div>
              <div>Circuit</div>
              <div>Definition</div>
            </div>
          </div>
          <Buton width={"200px"} height={"60px"} content={"Username"}></Buton>
        </div>
      </div>
    </div>
  );
};
