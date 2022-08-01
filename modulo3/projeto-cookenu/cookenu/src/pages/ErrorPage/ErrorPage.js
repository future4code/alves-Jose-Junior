import React from "react"
import error from '../../assets/error.png'
import { Typography } from "@mui/material"
import { ErrorImage, ErrorPageContainer } from "./Styled"

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error} />
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage