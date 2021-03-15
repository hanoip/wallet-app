import axios from "axios";
import { SET_USER, SET_BALANCE } from "./actionsTypes";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setBalance = (balance) => ({
  type: SET_BALANCE,
  payload: balance,
});

export const logUser = (userData) => (dispatch) => {
  return axios
    .post("/api/login", userData)
    .then(({ data }) => {
      dispatch(setUser(data.user));
      localStorage.setItem("user", JSON.stringify(data.user));
    })
    .catch((err) => console.log("log in error", err));
};

export const registerUser = (userData) => (dispatch) => {
  return axios
    .post("/api/register", userData)
    .then((res) => {
      if (res.status === 201) console.log("register successfull", res);
    })
    .catch((err) => console.log("register error", err));
};

export const logout = () => (dispatch) => {
  return axios
    .get("/api/logout")
    .then((res) => {
      dispatch(setUser({}));
      localStorage.clear();
    })
    .catch((err) => console.log("log out error", err));
};

export const isLoggedIn = () => (dispatch) => {
  const loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    dispatch(setUser(foundUser));
  }
};

export const fetchBalance = (data) => (dispatch) => {
  return axios
    .post("/api/balance", data)
    .then(({ data }) => {
      dispatch(setBalance(data.balance));
    })
    .catch((err) => console.log("fetch balance error", err));
};

export const makeDeposit = (data) => (dispatch) => {
  return axios
    .put("/api/deposit", data)
    .then(({ data }) => {
      dispatch(setBalance(data.balance));
    })
    .catch((err) => console.log("make deposit error", err));
};
