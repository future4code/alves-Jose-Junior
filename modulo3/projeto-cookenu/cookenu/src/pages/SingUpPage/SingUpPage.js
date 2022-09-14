import React from "react";
import logo from '../../assets/logo.png'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import SignUpForm from "./SingUpForm";
import { LogoImage, ScreenContainer } from "./Styled"

const SingUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    return(
        <ScreenContainer>
        <LogoImage src={logo}/>
        <SignUpForm setRightButtonText={setRightButtonText}/>
            <h2>SingUpPage</h2>
        </ScreenContainer>
    )
}

export default SingUpPage