"use client";

import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import { performOperation } from "../../utils/operation";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const handleNumberClick = (num) => {
    setDisplay(display === "0" ? num : display + num);
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setPrevValue(display);
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    const current = parseFloat(display);
    const previous = parseFloat(prevValue);
    const result = performOperation(previous, current, operation);

    if (result !== undefined) {
      setDisplay(result.toString());
      setOperation(null);
      setPrevValue(null);
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setOperation(null);
    setPrevValue(null);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-xs mx-auto">
      <Display display={display} />
      <ButtonGrid
        onNumberClick={handleNumberClick}
        onOperationClick={handleOperationClick}
        onEqualsClick={handleEqualsClick}
        onClearClick={handleClearClick}
      />
    </div>
  );
}
