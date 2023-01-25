import { useCallback, useState } from "react";

// utils
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// end utils

const ActiveState = ({ children, items }) => {
  const [activeArray, setBoxStateArr] = useState([]);
  const rollback = useCallback(async (boxState) => {
    const tmpArr = [...boxState];
    while (tmpArr.length) {
      await sleep(1000);
      tmpArr.pop();
      setBoxStateArr([...tmpArr]);
    }
  }, []);
  const setActive = (id) => {
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
