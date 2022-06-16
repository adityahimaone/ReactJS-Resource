import React, { useState, useEffect } from "react";

// param can be funtion
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
    // useEffect will run every time the component is fowrwards changes
  }, [forwards]);

  // you can return anything you want from hook an array, object or a number
  return counter;
};

export default useCounter;
