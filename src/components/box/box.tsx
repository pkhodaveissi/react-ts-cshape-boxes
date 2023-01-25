import { ReactNode } from "react";
import "./styles.css";
type BoxProps = {
  active: boolean;
  disabled: boolean;
  clickHandler: () => void;
};
const Box = ({ active, disabled, clickHandler }: BoxProps) => {
  return disabled ? (
    <div />
  ) : (
    <div
      onClick={clickHandler}
      className={`box${active ? " active" : ""}`}
    ></div>
  );
};

const BoxContainer = ({ children }: { children: ReactNode }) => {
  return <div className="box-container">{children}</div>;
};
export { Box, BoxContainer };
