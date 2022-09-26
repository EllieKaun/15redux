import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";

const MainContainer = () => {
  const [bruh, setBruh] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data);

  const handleRequest = () => {
    dispatch({ type: "GET_DATA", payload: bruh });
  };

  useEffect(() => {
    axios
      .get("https://jojoapi.herokuapp.com/")
      .then((data) => setBruh(data.data));
  }, []);
  useEffect(() => {
    console.log(bruh);
  }, [bruh]);
  return (
    <>
      <button onClick={handleRequest}>123</button>
    </>
  );
};

export default MainContainer;
