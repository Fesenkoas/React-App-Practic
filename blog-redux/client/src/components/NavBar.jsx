import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { checkIsAuth, logout } from "./../redux/future/auth/authSlice";
import { useDispatch } from "react-redux";

export const NavBar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  
  const activeStyle = {
    color: "white",
  };

  const handleLogout = () => {
    dispatch(logout());
    toast('Logout');
  };
  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex jutify-center w-6 h-6 bg-gray-600 text-xs text-white roundet-sm">
        E
      </span>

      {isAuth && (
        <div className="flex gap-8">
          <NavLink
            className="text-xs text-gray-400 hover:text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className="text-xs text-gray-400 hover:text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={"/posts"}
          >
            My Post
          </NavLink>
          <NavLink
            className="text-xs text-gray-400 hover:text-white"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={"/new"}
          >
            New Post
          </NavLink>
        </div>
      )}

      <div className="flex jutify-center items-center bg-gray-600 text-sx text-white roundet-sm px-4 py-2">
        <button>{isAuth ? <Link onClick={handleLogout} to={"/login"}>Logout</Link> : <Link to={"/login"}>Login</Link>}</button>

      </div>
    </div>
  );
};