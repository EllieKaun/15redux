import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "../components/card";
import { req } from "../redux/action";
import { Box, Button } from "@mui/material";

const MainContainer = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const [filter, setFilter] = useState("Diamond is Unbreakable");
  console.log(Object?.keys(state));

  useEffect(() => {
    dispatch(req());
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
          "& button": { width: "200px", height: "70px" },
        }}
      >
        {state ? (
          Object?.keys(state).map((item) => (
            <Button
              variant="contained"
              onClick={() => {
                setFilter(item);
              }}
            >
              {item}
            </Button>
          ))
        ) : (
          <></>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {state?.[filter] ? (
          state?.[filter]?.map((item) => <Card item={item} />)
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default MainContainer;
