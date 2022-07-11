import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export default function ChooseButtons(props) {
  return (
    <ButtonsContainer>
      <Button size="large" color="secondary" onClick={props.onClickNoLike}><strong>X</strong></Button>
      <Button size="large" onClick={props.onClickYesLike}>❤️</Button>
    </ButtonsContainer>
  )
}