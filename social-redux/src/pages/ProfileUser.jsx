import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getFollowFetch,
  getProfileFetch,
  postFollowFetch,
} from "../future/action/getUsersFetch";
import { useSelector } from "react-redux";
import { deleteFollowFetch } from "./../future/action/getUsersFetch";

export const ProfileUser = () => {
  let { userId } = useParams();
  const dispatch = useDispatch();
  const { profile, loading, followed } = useSelector((state) => state.user);

  const followHandle = (user) => {
    if (followed) {
      dispatch(deleteFollowFetch(user.id));
    } else {
      dispatch(postFollowFetch(user.id));
    }
  };

  useEffect(() => {
    dispatch(getProfileFetch(userId));
    dispatch(getFollowFetch(userId));
  }, [dispatch, userId]);

  const status = true;
  return (
    <>
      {loading && (
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-col bg-white bg-opacity-30 w-56 h-96 m-5 p-5 text-center items-center rounded-lg">
              <div className="rounded-full">
                <img
                  className=" h-42 rounded-full"
                  src={
                    profile.photos.large
                      ? profile.photos.large
                      : "https://openclipart.org/image/800px/177394"
                  }
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
                <button
                  onClick={(e) => followHandle(userId)}
                  className="text-lg my-5 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
                >
                  {followed ? "Unsubscribe" : "Subscribe"}
                </button>
              </div>
            </div>
            {/* About ME */}
            <div className="flex flex-col bg-white bg-opacity-30 w-full  h-min-96 mr-5 my-5 p-5  rounded-lg">
              <div className="text-3xl text-center">{profile.fullName}</div>
              <div>
                <div className="text-xl">Contacts:</div>
                {profile.contacts.facebook? (
                  <div className="flex items-center  mb-1 rounded-lg">
                    <a href={profile.contacts.facebook}>Facebook</a>
                  </div>
                ):(
                  <div className="flex opacity-40  items-center  mb-1 rounded-lg">
                    Facebook
                  </div>
                )}
                {profile.contacts.github ? (
                  <div className="flex  items-center  mb-1 rounded-lg">
                    <a href={profile.contacts.github}>GitHub</a>
                  </div>
                ):(
                  <div className="flex opacity-40  items-center  mb-1 rounded-lg">
                    GitHub
                  </div>
                )}
                {profile.contacts.instagram ?(
                  <div className="flex   items-center mb-1  rounded-lg">
                    <a href={profile.contacts.instagram}>Instagram</a>
                  </div>
                ):(
                  <div className="flex opacity-40  items-center  mb-1 rounded-lg">
                    Instagram
                  </div>
                )}
                {profile.contacts.mainLink ? (
                  <div className="flex   items-center mb-1  rounded-lg">
                    <a href={profile.contacts.mainLink}>MainLink</a>
                  </div>
                ):(
                  <div className="flex opacity-40 items-center  mb-1 rounded-lg">
                    MainLink
                  </div>
                )}
                {profile.contacts.twitter ? (
                  <div className="flex   items-center  mb-1 rounded-lg">
                    <a href={profile.contacts.twitter}>Twitter</a>
                  </div>
                ):(
                  <div className="flex opacity-40 items-center  mb-1 rounded-lg">
                    Twitter
                  </div>
                )}
                {profile.contacts.vk ? (
                  <div className="flex  items-center  mb-1 rounded-lg">
                    <a href={profile.contacts.vk}>VK</a>
                  </div>
                ):(
                  <div className="flex opacity-40  items-center  mb-1 rounded-lg">
                    VK
                  </div>
                )}
                {profile.contacts.website ? (
                  <div className="flex  items-center  mb-1 rounded-lg">
                    <a href={profile.contacts.website}>Website</a>
                  </div>
                ):(
                  <div className="flex opacity-40  items-center  mb-1 rounded-lg">
                    Website
                  </div>
                )}
                {profile.contacts.youtube ? (
                  <div className="flex  items-center mb-1  rounded-lg">
                    <a href={profile.contacts.youtube}>YouTube</a>
                  </div>
                ):(
                  <div className="flex opacity-40  items-center  mb-1 rounded-lg">
                    YouTube
                  </div>
                )}
              </div>
              <div className="text-xl">STATUS:</div>
              <div>{profile.aboutMe}</div>
              {profile.lookingForAJob && (
                <>
                  <div className="text-xl">Looking For A Job:</div>
                  <div>{profile.lookingForAJobDescription}</div>
                </>
              )}
            </div>
          </div>
          {/* My Post */}
          <div className="flex-col mr-5 ml-5 bg-white bg-opacity-30 h-auto rounded-lg text-center items-center">
            <div>text</div>
            <input type="text" />
            <div>
              <button>1</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
