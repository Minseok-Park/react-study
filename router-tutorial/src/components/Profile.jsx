import React from "react";
import { useParams } from "react-router";
import WithRouterSample from "./WithRouterSample";

const profileData = {
  minseok: {
    name: "박민석",
    description: "Frontend Engineer",
  },
  homer: {
    name: "호머 심슨",
    description: "심슨 가족에 나오는 아빠 역할 캐릭터",
  },
};

const Profile = () => {
  const params = useParams();
  const { username } = params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};
export default Profile;
