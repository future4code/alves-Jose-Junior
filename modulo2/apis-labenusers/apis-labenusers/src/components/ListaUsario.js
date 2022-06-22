import axios from "axios"
import React from "react";
import styled from "styled-components"

const CardUsuario = styled.div `
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
 `




export default class ListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }


    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "robinaldo-alves"
            }
        })
        .then((resposta) =>{
            this.setState({usuarios: resposta.data})
        })
        .catch((erro) =>{
            alert("Temos um Problema, Tente novamente")
        })
    }
    
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "robinaldo-alves"
            }
        })
        .then((resposta) =>{
            alert("Usuario(a) Deletado(a) Com Sucesso!")
            this.pegarUsuarios()
        })
        .catch((erro) =>{
            alert("Ocorreu um equivoco!")
        })
    }
    
    
    render() {
        const ListaUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() =>this.deletarUsuario(user.id)}>x</button>
                </CardUsuario>
                )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usários</h2>
                {ListaUsuarios}
            </div>
        )
    }
}
