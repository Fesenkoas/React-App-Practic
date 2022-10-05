import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileFetch,
  putPRofileFullFetch,
  putStatusFetch,
} from "../future/action/getUsersFetch";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaVk,
  FaTwitter,
  FaYoutube,
  FaChrome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { putPhotoFetch } from "./../future/action/getUsersFetch";

// Забросил урок на 80 серии из-за кучи ошибок старого кода,решил переделать все на новый REACT-REDUX_RTK. Сделал с хуками не как в видео-уроке React 2022
// REACT-REDUX-RTK, JAVASCRIPT, TYPESCRIPT, JAVA
//https://www.facebook.com/fesenkoas
//https://github.com/Fesenkoas
//https://vk.com/id8071280

export const Setting = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, loading } = useSelector((state) => state.user);

  const [facebook, setFacebook] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [mainLink, setMainLink] = useState("");
  const [twitter, setTwitter] = useState("");
  const [vk, setVk] = useState("");
  const [website, setWebsite] = useState("");
  const [youtube, setYoutube] = useState("");
  const [photo, setPhoto] = useState("");
  const [aboute, setAboute] = useState("");
  const [forJob, setForJob] = useState("0");
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState('')

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handlePhoto = () => {
    const data = new FormData();
    if (photo) {
      data.append("image", photo);
      dispatch(putPhotoFetch(data));
      setPhoto('')
      navigate("/");
    }
  };
const handleStatus=() =>{
  const objStatus = {
    status,
  };
  dispatch(putStatusFetch(objStatus))
}
  const handeleSave = () => {
    try {
      const objProfile = {
        aboutMe: aboute || profile.aboutMe,
        contacts: {
          facebook: facebook || profile.contacts.facebook,
          website: website || profile.contacts.website,
          vk: vk || profile.contacts.vk,
          twitter: twitter || profile.contacts.twitter,
          instagram: instagram || profile.contacts.instagram,
          youtube: youtube || profile.contacts.youtube,
          github: github || profile.contacts.github,
          mainLink: mainLink || profile.contacts.mainLink,
        },
        fullName: "Casper",
        lookingForAJob: isChecked,
        lookingForAJobDescription: forJob,
      };
      dispatch(putPRofileFullFetch(objProfile));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getProfileFetch("24948"));
  }, [dispatch]);

  return (
    <>
      {loading && (
        <>
       
          <div className="flex flex-col bg-white bg-opacity-30   h-min-96 mr-5 m-5 p-5  rounded-lg">
            Cange Photo:
            <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
              <div className="flex items-center  mb-1 rounded-lg">
                Put New Photo:
              </div>
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <div className="">
                {photo && (
                  <img src={URL.createObjectURL(photo)} alt={photo.name} />
                )}
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handlePhoto}
                className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-white bg-opacity-30   h-min-96 mr-5 m-5 p-5  rounded-lg">
            Status:
            <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
              <div className="flex items-center  mb-1 rounded-lg">
                Status:
              </div>
              <input
                type="text"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                placeholder='status'
              />
            </div>
            <div className="text-center">
              <button
                onClick={handleStatus}
                className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-white bg-opacity-30   h-min-96 mr-5 m-5 p-5  rounded-lg">
            <div>
              Contacts:
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaFacebook className="h-4 m-1" /> Facebook:
                  {profile.contacts.facebook}
                </div>
                <input
                  className="w-96"
                  onChange={(e) => setFacebook(e.target.value)}
                  type="text"
                  placeholder="Facebook"
                  value={facebook}
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex   items-center  mb-1 rounded-lg">
                  <FaGithub className="h-4 m-1" /> GitHub:
                  {profile.contacts.github}
                </div>
                <input
                  onChange={(e) => setGithub(e.target.value)}
                  type="text"
                  placeholder="GitHub"
                  value={github}
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex   items-center  mb-1 rounded-lg">
                  <FaInstagram className="h-4 m-1" /> Instagram:
                  {profile.contacts.instagram}
                </div>
                <input
                  onChange={(e) => setInstagram(e.target.value)}
                  value={instagram}
                  type="text"
                  placeholder="Instagram"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaLinkedin className="h-4 m-1" /> Linkedin:
                  {profile.contacts.mainLink}
                </div>
                <input
                  onChange={(e) => setMainLink(e.target.value)}
                  value={mainLink}
                  type="text"
                  placeholder="Linkedin"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaTwitter className="h-4 m-1" /> Twitter:
                  {profile.contacts.twitter}
                </div>
                <input
                  onChange={(e) => setTwitter(e.target.value)}
                  value={twitter}
                  type="text"
                  placeholder="Twitter"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaVk className="h-4 m-1" />
                  VK:{profile.contacts.vk}
                </div>
                <input
                  onChange={(e) => setVk(e.target.value)}
                  value={vk}
                  type="text"
                  placeholder="VK"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex  items-center  mb-1 rounded-lg">
                  <FaChrome className="h-4 m-1" /> WebSite:
                  {profile.contacts.website}
                </div>
                <input
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                  type="text"
                  placeholder="WebSite"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaYoutube className="h-4 m-1" /> YouTube:
                  {profile.contacts.youtube}
                </div>
                <input
                  onChange={(e) => setYoutube(e.target.value)}
                  type="text"
                  placeholder="YouTube"
                  value={youtube}
                />
              </div>
              <div className="text-center">
                <button
                  onClick={handeleSave}
                  className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white bg-opacity-30   h-min-96 mr-5 m-5 p-5  rounded-lg">
          Aboute Me:
            <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
              <div className="flex items-center  mb-1 rounded-lg">
                Aboute Me:
              </div>
              <textarea
                onChange={(e) => setAboute(e.target.value)}
                value={aboute}
                className="w-full h-28"
                placeholder={profile.contacts.aboutMe}
              />
            </div>
            <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
              <div className="flex items-center  mb-1 rounded-lg">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                Looking For A Job?
              </div>
              {isChecked && (
                <textarea
                  onChange={(e) => setForJob(e.target.value)}
                  value={forJob}
                  className="w-full h-28"
                  placeholder="Looking For A Job"
                />
              )}
            </div>
            <div className="text-center">
              <button
                onClick={handeleSave}
                className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
