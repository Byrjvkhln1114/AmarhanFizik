import { Buton } from "./buton";
export const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "",
        display: "flex",
        justifyContent: "center",
        marginTop: "2%",
      }}
    >
      <div
        className=""
        style={{
          width: "75vw",
          backgroundColor: "",
        }}
      >
        {/* header */}
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
          <Buton></Buton>
        </div>
      </div>
    </div>
  );
};
