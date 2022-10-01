import React from "react";
import SinglComment from "./SinglComment";

const AboutMe = ({ profile }) => {
  
  return (
    <div className="flex flex-col bg-white bg-opacity-30 w-full  h-min-96 mr-5 my-5 p-5  rounded-lg">
      <div className="text-3xl text-center">{profile.fullName}</div>
      <div>
        <div className="text-xl">Contacts:</div>
        {profile.contacts.facebook ? (
          <div className="flex items-center  mb-1 rounded-lg">
            <a href={profile.contacts.facebook}>Facebook</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            Facebook
          </div>
        )}
        {profile.contacts.github ? (
          <div className="flex  items-center  mb-1 rounded-lg">
            <a href={profile.contacts.github}>GitHub</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            GitHub
          </div>
        )}
        {profile.contacts.instagram ? (
          <div className="flex   items-center mb-1  rounded-lg">
            <a href={profile.contacts.instagram}>Instagram</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            Instagram
          </div>
        )}
        {profile.contacts.mainLink ? (
          <div className="flex   items-center mb-1  rounded-lg">
            <a href={profile.contacts.mainLink}>MainLink</a>
          </div>
        ) : (
          <div className="flex opacity-40 items-center  mb-1 rounded-lg">
            MainLink
          </div>
        )}
        {profile.contacts.twitter ? (
          <div className="flex   items-center  mb-1 rounded-lg">
            <a href={profile.contacts.twitter}>Twitter</a>
          </div>
        ) : (
          <div className="flex opacity-40 items-center  mb-1 rounded-lg">
            Twitter
          </div>
        )}
        {profile.contacts.vk ? (
          <div className="flex  items-center  mb-1 rounded-lg">
            <a href={profile.contacts.vk}>VK</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            VK
          </div>
        )}
        {profile.contacts.website ? (
          <div className="flex  items-center  mb-1 rounded-lg">
            <a href={profile.contacts.website}>Website</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            Website
          </div>
        )}
        {profile.contacts.youtube ? (
          <div className="flex  items-center mb-1  rounded-lg">
            <a href={profile.contacts.youtube}>YouTube</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            YouTube
          </div>
        )}
      </div>
      <div className="text-xl">STATUS:</div>
      <div>{profile.userId === 24948 ? <SinglComment profile={profile.aboutMe}/> : profile.aboutMe}</div>
      {profile.lookingForAJob && (
        <>
          <div className="text-xl">Looking For A Job:</div>
          <div>{profile.lookingForAJobDescription}</div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
