import React from 'react'
import styled from 'styled-components'
import { Titulo } from '../Styled'

// const DivPrincipal = styled.div`
//   position: fixed;
//   border-radius: 50px;
//   left:50%;
//   top: 50%;
//   display: flex;
//   flex-direction: column;
//   transform: translate(-50%, -50%);
//   align-items: center;
//   background-color: #dec8e7;
//   width: 370px;
//   height: 600px;
//   padding: 20px;
// `

export default function Header() {
    return (
        <div>
            <h1>AstroMatch</h1>
            <hr />
            <button>Ir para Matches</button>
            <button>Volta para Tela de Perfis</button>
        </div>
    )
}