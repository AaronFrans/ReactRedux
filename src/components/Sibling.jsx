import React from "react";
import { store } from "../store";
import { setToFalse, setToTrue } from "../store/checked/slice";
import Bool from "./Bool"

const Sibling = () => {

  return (
    <div
      style={{ borderStyle: "solid", borderWidth: 4, padding: 10, margin: 10 }}
    >
      <h2>Sibling</h2>
      <button onClick ={() => store.dispatch(setToTrue())}>Change to true</button> 
      <button onClick ={() => store.dispatch(setToFalse())}>Change to false</button> 
      <Bool />
    </div>
  );
};

export default Sibling;
