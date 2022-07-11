import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  margin: 16px;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 100%;
  max-height: 350px;
`;

const ProfileInfo = styled.div`
  padding: 0 16px;
  color: #6959CD;
  border-bottom: 0.3mm solid #6959CD;
`;

export default function ProfileCard(props) {
  const { name, age, bio, photo } = props.profile;

  return (
    <ProfileCardContainer>
      <ProfilePicture src={photo} />
      <ProfileInfo>
        <p>
          {name}, {age}
        </p>
        <p>{bio}</p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
}