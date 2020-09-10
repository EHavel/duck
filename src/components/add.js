import React from "react";
import { useDispatch } from "react-redux";
import { actions as countActions } from "../ducks/count";

const Add = () => {
  const dispacth = useDispatch();

  const clickAdd = () => {
    console.log("Adiciona um 🦆");
    dispacth(countActions.add1());
  };

  return <button onClick={clickAdd}>Adicionar +1</button>;
};

export default Add;
