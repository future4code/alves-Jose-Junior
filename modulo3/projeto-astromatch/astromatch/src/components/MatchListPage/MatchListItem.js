import React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  

  :hover {
    background-color: rgba(0,0,0,0.1)
  }
`

const Perfil = styled.img`
  border-radius: 60%;
  margin-right: 8px;
  height: 30px;
  width: 30px;
`

export default function MatchListItem(props) {
  const profile = props.profile
  return (
    <ListItemContainer>
      <Perfil src={profile.photo}/>
      <p>{profile.name}</p>
    </ListItemContainer>
  )
}