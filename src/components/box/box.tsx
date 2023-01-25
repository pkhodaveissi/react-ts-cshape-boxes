import "./styles.css";
const Box = ({ active, disabled, clickHandler }) => {
  return disabled ? (
    <div />
  ) : (
    <div
      onClick={clickHandler}
      className={`box${active ? " active" : ""}`}
    ></div>
  );
};

const BoxContainer = ({ children }) => {
  return <div className="box-container">{children}</div>;
};
export { Box, BoxContainer };
