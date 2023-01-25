import { FC, useCallback, useState } from "react";

// utils
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// end utils

// types
type ItemType = Array<number>;
type ChildrenProps = {
  activeArray: ItemType;
  items: ItemType;
  setActive: (id: number) => void;
};
type ActiveStateProps = {
  children: FC<ChildrenProps>;
  items: ItemType;
};
// end types
const ActiveState: React.FC<ActiveStateProps> = ({ children, items }) => {
  const [activeArray, setBoxStateArr] = useState<ItemType>([]);
  const rollback = useCallback(async (boxState: ItemType) => {
    const tmpArr = [...boxState];
    while (tmpArr.length) {
      await sleep(1000);
      tmpArr.pop();
      setBoxStateArr([...tmpArr]);
    }
  }, []);
  const setActive = (id: number) => {
    const tempArr = [...activeArray];
    tempArr.push(id);
    setBoxStateArr(tempArr);
    if (
      tempArr.length > 6 /* should be replaced with calculated values| props */
    ) {
      rollback(tempArr);
    }
  };
  // items should be used to determine if cluase values
  return children({ activeArray, items, setActive });
};

export default ActiveState;
