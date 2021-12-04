import React, { useEffect, useState } from "react";
import { addTwoNumber } from "../utils/operationServices";
import "./Keypad.css";

export default function Keypad(props: any) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["+", "-", "=", "AC"];
  const [currentOperator, setCurrentOperator] = useState("");
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (currentNumber != 0) {
      handleOperations(currentOperator);
    }
  }, [currentNumber]);

  const handleOperations = (operator: string) => {
    switch (operator) {
      case "+":
        if (currentOperator === "") {
          setCurrentOperator("+");
        } else {
          const result = addTwoNumber(props.value, currentNumber);
          setCurrentNumber(0);
          props.handleResultUpdate(result);
        }
        break;
      case "+":
        const result = addTwoNumber(1, 2);
        break;
    }
  };

  return (
    <>
      <div className="digits-section">
        {numbers.map((digit) => (
          <button
            className="digit"
            value={digit}
            onClick={(event: any) => {
              if (currentOperator === "") {
                props.handleResultUpdate(Number(event.target.value));
              } else {
                setCurrentNumber(Number(event.target.value));
              }
            }}
          >
            {digit}
          </button>
        ))}
      </div>
      <div className="operators-section">
        {operators.map((operator) => (
          <button
            className="operator"
            value={operator}
            onClick={(event: any) => handleOperations(event.target.value)}
          >
            {operator}
          </button>
        ))}
      </div>
    </>
  );
}
