import React from "react";

import avatarF from "../assests/avatar-svgrepo-com (1).svg";
import avatar from "../assests/avatar-svgrepo-com.svg";
import noGender from "../assests/no-gender-svgrepo-com.svg";

const Avatar = ({ actor }) => {
  return (
    <img
      src={
        actor.gender === "male"
          ? avatar
          : actor.gender === "female"
          ? avatarF
          : noGender
      }
      alt="actor_avatar"
      className="h-[20rem] shadow-xl px-4 py-12 rounded-lg bg-slate-700 "
    />
  );
};

export default Avatar;
