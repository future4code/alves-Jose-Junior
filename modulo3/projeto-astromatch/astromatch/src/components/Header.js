import React from 'react'
import styled from 'styled-components'

// const Header = styled.div`
//     text-align: center;
//     background-color: red;
// `

export default function Header () {
    return (
        <div>
            <h1>AstroMatch</h1>
            <hr/>
            <button>Ir para Matches</button>
            <button>Volta para Tela de Perfis</button>
        </div>
    )
}