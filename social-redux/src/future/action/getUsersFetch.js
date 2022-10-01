import { getUsers, getProfile, loading, getFollowed } from "../redux/userSlice";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const instanseGet = {
  credentials: 'include',
  method: "GET",
  headers: {
    "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
  },
};

const instansePost = {
  credentials: 'include',
  method: "POST",
  headers: {
    "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
  },
};

const instanseDelete = {
  credentials: 'include',
  method: "DELETE",
  headers: {
    "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
  },
};
export const getUsersFetch = (currentPage = 1) => {
  return (dispatch) => {
    fetch(`${baseURL}users?page=${currentPage}&count=15`, instanseGet)
      .then((res) => res.json())
      .then((data) => dispatch(getUsers(data)));
  };
};

export const postFollowFetch = (id) => {
  return (dispatch) => {
    fetch(`${baseURL}follow/${id}`,instansePost)
      .then((response) => response.data)
  };
}

export const deleteFollowFetch = (id) => {
  return (dispatch) => {
    fetch(`${baseURL}follow/${id}`, instanseDelete)
      .then((response) => response.data)
  };
};
export const getFollowFetch = (id) => {
  return (dispatch) => {
    fetch(`${baseURL}follow/${id}`, instanseGet)
    .then((res) => res.json())
      .then((data) => dispatch(getFollowed(data)));
  };
};

export const getProfileFetch = (id) => {
  return (dispatch) => {
    dispatch(loading(false))
    fetch(`${baseURL}profile/${id}`, instanseGet)
      .then((res) => res.json())
      .then((data) => dispatch(getProfile(data)));
      
  };
};
