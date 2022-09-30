import React, { useState } from "react";



export const ProfileUser = () => {
  const status = true;
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="flex flex-col bg-white bg-opacity-30 w-56 h-96 m-5 p-5 text-center items-center rounded-lg">
          <div className="rounded-full">
            <img
              className=" h-42 rounded-full"
              src={"https://openclipart.org/image/800px/177394"}
              alt="#"
            />
            {status ? (
              <div className="text-lg my-5 border-black border-solid border  bg-green-500 bg-opacity-70 rounded-lg">
                ONLINE
              </div>
            ) : (
              <div className="text-lg my-5 border-black border-solid border  bg-red-500 bg-opacity-70 rounded-lg">
                OFFLINE
              </div>
            )}
          </div>
        </div>
        {/* About ME */}
        <div className="flex bg-white bg-opacity-30 w-full h-96 mr-5 my-5 p-5  rounded-lg">
          Casper
        </div>
      </div>
      {/* My Post */}
      <div className="flex-col mr-5 ml-5 bg-white bg-opacity-30 h-auto rounded-lg text-center items-center">
        <div>text</div>
        <input type='text'/>
        <div>
        <button>1</button>
        </div>
      </div>
    </div>
  );
};
