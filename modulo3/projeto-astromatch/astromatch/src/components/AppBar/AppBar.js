import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';


const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #6959CD;
  align-items: center;
  padding: 0 8px;
  font-family:Georgia, 'Times New Roman', Times, serif Tahoma, Verdana, sans-serif;
`
const Titulo = styled.div`
  color: #6959CD;
`

function AppBar(props) {
  return (
    <AppBarContainer>
      <Button size="small" variant="outlined" color="secondary" onClick={props.goToChooseProfilePage}>Voltar</Button>
      <Titulo><p><strong>Astromatch</strong></p></Titulo>
      <Button size="small" variant="outlined" color="secondary" onClick={props.goToMatchListPage}>Lista</Button>
    </AppBarContainer>
  )
}

export default AppBar;
