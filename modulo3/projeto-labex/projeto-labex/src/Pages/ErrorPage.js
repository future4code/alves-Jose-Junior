import styled from "styled-components"

const Erro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    width: 100vw;
    height: 100vh;
    
`
const Strong = styled.div`
    font-family: sans-serif;
`



export const ErrorPage = () => {
    return (
        <Erro>
            <p><Strong>Ops! Página não encontrada.</Strong></p>
        </Erro>
    )
}