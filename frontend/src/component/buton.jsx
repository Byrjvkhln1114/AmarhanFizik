export const Buton = ({ content, width, height, onclicker }) => {
  return (
    <button
      className="butt"
      style={{
        height: height,
        width: width,
        borderRadius: "10px",
        border: "none",
        color: "white",
        fontWeight: "700",
        fontSize: "18px",
      }}
      onClick={onclicker}
    >
      {content}
    </button>
  );
};
