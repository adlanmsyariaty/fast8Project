import axios from "axios";
import { FETCH_USER_DATA, BASE_URL, PAGE_NUMBER } from "./actionType";

export const fetchUser = (payload) => {
  return {
    type: FETCH_USER_DATA,
    payload,
  };
};

export const changePage = (payload) => {
  return {
    type: PAGE_NUMBER,
    payload, 
  };
};

export const loadUsers = (page) => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}/?results=4&page=${page}&seed=b4916486e58b6b4c`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(fetchUser(data.results));
      });
  };
};