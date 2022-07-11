import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ChooseButtons from "./ChooseButtons";
import { getProfileToChooseRequest, chooseProfileRequest } from "../../Api/profiles";
import styled from "styled-components";

const Loading = styled.div`
  color: #6959CD;
`

export default function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  const getProfileToChoose = () => {
    getProfileToChooseRequest().then(profile => {
      setProfileToChoose(profile);
    });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const chooseProfile = choice => {
    setProfileToChoose(undefined);

    chooseProfileRequest(choice, profileToChoose.id).then(() => {
      getProfileToChoose();
    });
  };

  const onClickYesLike = () => {
    chooseProfile(true);
  };

  const onClickNoLike = () => {
    chooseProfile(false);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          <ProfileCard profile={profileToChoose} />
          <ChooseButtons onClickNoLike={onClickNoLike} onClickYesLike={onClickYesLike} />
        </>
      ) : (
       <Loading><p>Um momento...</p></Loading>
      )}
    </div>
  );
}
;