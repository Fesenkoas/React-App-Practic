import { getCapcha, getMe } from "../redux/loginSlice";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

const instansePost = {
    credentials: "include",
    method: "POST",
    headers: {
      "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
    },
  };

  const instanseDelete = {
    credentials: "include",
    method: "DELETE",
    headers: {
      "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
    },
  };

  const instanseGet = {
    credentials: "include",
    method: "GET",
    headers: {
      "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
    },
  };

export const putLoginFetch = (newData) => (dispatch)=>{
    fetch(`${baseURL}/auth/login`, {
        credentials: "include",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
}

export const deleteLogin = () => (dispatch) =>{
    fetch(`${baseURL}/auth/login`, instanseDelete)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export const getCapchaFetch = () => (dispatch) =>{
    fetch(`${baseURL}/security/get-captcha-url`, instanseGet)
    .then((res) => res.json())
    .then((data) => dispatch(getCapcha(data)));
}

export const getMeFetch = () => (dispatch) =>{
    fetch(`${baseURL}/auth/me`, instanseGet)
    .then((res) => res.json())
    .then((data) => dispatch(getMe(data)));
}
