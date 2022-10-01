import { getUsers, getProfile, loading, getFollowed } from "../redux/userSlice";
const objStatus = {
  status: "Сделал с хуками не как в видио уроке React 2022",
};
const objProfile = {
  aboutMe: "Забросил урок на 80 серии из-за кучи ошибок старого кода, решил переделать все на новый REACT-REDUX_RTK. Сделал с хуками не как в видео-уроке React 2022",
  contacts: {
    facebook: null,
    website: null,
    vk: 'https://vk.com/id8071280',
    twitter: null,
    instagram: null,
    youtube: null,
    github: "https://github.com/Fesenkoas",
    mainLink: null,
  },
  fullName:"Casper",
  lookingForAJob: true,
  lookingForAJobDescription: "REACT-REDUX-RTK, JAVASCRIPT, TYPESCRIPT, JAVA",
  photos: { 
    small: "https://avatars.githubusercontent.com/u/22136855?s=96&v=4", 
    large: "https://avatars.githubusercontent.com/u/22136855?v=4" 
},
};
const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const instanseGet = {
  credentials: "include",
  method: "GET",
  headers: {
    "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
  },
};

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

const instansePut = {
  credentials: "include",
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
  },
  body: JSON.stringify(objProfile),
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
    fetch(`${baseURL}follow/${id}`, instansePost).then(
      (response) => response.data
    );
  };
};

export const deleteFollowFetch = (id) => {
  return (dispatch) => {
    fetch(`${baseURL}follow/${id}`, instanseDelete).then(
      (response) => response.data
    );
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
    dispatch(loading(false));
    fetch(`${baseURL}profile/${id}`, instanseGet)
      .then((res) => res.json())
      .then((data) => dispatch(getProfile(data)));
  };
};
export const putStatusFetch = () => {
  return (dispatch) => {
    dispatch(loading(false));
    fetch(`${baseURL}profile/status`, instansePut)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
};

export const putPRofileFullFetch = () => {
  return (dispatch) => {
    dispatch(loading(false));
    fetch(`${baseURL}profile`, instansePut)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
};

export const getStatusFetch = () => {
  return (dispatch) => {
    fetch(`${baseURL}/profile/status/24948`, instanseGet)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
};
