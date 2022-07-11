import React from "react";
import MatchListItem from "./MatchListItem";
import styled from "styled-components";
import { useMatches } from "../../Hooks/useMatches";

const ListContainer = styled.div`
  padding: 8px;
`;

export default function MatchListPage() {
  const matches = useMatches();

  return (
    <ListContainer>
      {matches.map(profile => {
        return <MatchListItem profile={profile} />;
      })}
    </ListContainer>
  );
}