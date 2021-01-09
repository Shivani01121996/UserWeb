import { FETCH_USER, LOGIN } from "./types";
import Axios from "axios";

export const fetchAll = () => async dispatch => {
  return await Axios.get("http://localhost:1337/users",)
    .then(items => {
      //console.log(items);
      return dispatch({
        type: FETCH_USER,
        payload: items.data
      })
    }
    ).catch(error => console.log(error));
};

export const login = (postData) => async dispatch => {
  return await Axios.post(`http://localhost:1337/login`, postData)
    .then(items => {
      //console.log(items);
      return dispatch({
        type: LOGIN,
        payload: items.data
      })
    }
    ).catch(error => console.log(error));
};
//