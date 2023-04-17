import "./styles.css"

export const Buton = ({ content, width, height, onclicker }) => {
  return (
    <button
    id="button1"
    className="butt"
      style={{
        height: height,
        width: width,
      }}
      onClick={onclicker}
    >
      {content}
    </button>
  );
};
