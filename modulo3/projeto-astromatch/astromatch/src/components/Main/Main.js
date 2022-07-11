import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage'
import MatchListPage from '../MatchListPage/MatchListPage'
import styled from 'styled-components';
import { useState } from 'react';
import AppBar from '../AppBar/AppBar';

const MainContainer = styled.div`
  border: 1.2px solid #6959CD;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 30px;
  display: flex;
  flex-direction: column;
`

export default function Main() {
  const [selectedPage, setSelectedPage] = useState('choose-profile')

  const renderSelectedPage = () => {
    switch(selectedPage) {
      case 'choose-profile':
        return <ChooseProfilePage/>
      case 'match-list':
        return <MatchListPage/>
      default:
        return <ChooseProfilePage/>
    }
  }

  const goToChooseProfilePage = () => {
    setSelectedPage('choose-profile')
  }

  const goToMatchListPage = () => {
    setSelectedPage('match-list')
  }

  return (  
    <MainContainer>
      <AppBar
        goToChooseProfilePage={goToChooseProfilePage} 
        goToMatchListPage={goToMatchListPage}
      />
      {renderSelectedPage()}
    </MainContainer>
  )
}

