import { BoxContainer, Box } from "./box";
import ActiveStateManager from "./active-state-manager";
const BoxMatrix = () => {
  const boxArr = [1, 1, 1, 1, 0, 0, 1, 1, 1];
  return (
    <BoxContainer>
      <ActiveStateManager items={boxArr}>
        {({ activeArray, items, setActive }) => {
          return (
            <>
              {items.map((item, idx) => {
                return (
                  <Box
                    key={idx}
                    active={activeArray.indexOf(idx) > -1}
                    disabled={!item}
                    clickHandler={() => setActive(idx)}
                  />
                );
              })}
            </>
          );
        }}
      </ActiveStateManager>
    </BoxContainer>
  );
};

export default BoxMatrix;
