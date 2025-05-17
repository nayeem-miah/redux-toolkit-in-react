import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todoConstants";

export const getTodos = async (dispatch) => {
    // console.log("get todos data..............");
    dispatch({ type: GET_TODOS_REQUEST })
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        // console.log(res.data);
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    } catch (err) {
        // console.log("error is error ", err);
        dispatch({ type: GET_TODOS_FAILED, payload: err.message })
    }
};