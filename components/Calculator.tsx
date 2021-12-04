import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Keypad from "./Keypad";
import Results from "./Results";

export default function Calculator() {
  const [result, setResultValue] = useState(0);

  // const updateResultValue = (value:number) => setResultValue(value)

  return (
    <>
      <Results value={result} />
      <Keypad
        value={result}
        handleResultUpdate={(value: number) => setResultValue(value)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  childText: {
    color: "#00F",
    backgroundColor: "#F00",
    alignItems: "center",
    justifyContent: "center",
  },
});
