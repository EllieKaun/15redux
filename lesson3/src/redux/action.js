import axios from "axios";

export const req = () => {
  return async (dispatch) => {
    const data = await axios.get("https://jojoapi.herokuapp.com/");
    const result = await data;
    // console.log(result.data, "result");
    dispatch({ type: "GET_DATA", payload: result.data });
  };
};
