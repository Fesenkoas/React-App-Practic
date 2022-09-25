import React from "react";
import { PostPage } from "./PostPage";

export const AddPostPage = () => {
  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py2 bg-gray-600 text-xsmt-3 flex items-center justify-center border-2 border-dotted cursor-pointer">
        Add image
        <input type="file" className="hidden" />
      </label>
      <div className="flex object-cover py-2 ">IMAGE</div>

      <label className="text-xs text-white opacity-70">
        Header Post
        <input
          type="text"
          placeholder="header post"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700 "
        />
      </label>
      <label className="text-xs text-white opacity-70">
        Text Post
        <textarea
          placeholder="text post"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none resize-none h-40 placeholder:text-gray-700 "
        />
      </label>
      <div className="flex gap-8 items-center justify-center mt-4">
        <button className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4" >Add</button>
        <button className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4" >Cancel</button>
      </div>
    </form>
  );
};
