import axios from "axios";
import React from "react";

export default class Cadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }
    
    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "robinaldo-alves"
            }
        }).then((resposta) => {
            alert("Usuário(a) cadastrado com sucesso")
            this.setState({nome: "", email: ""})
        })
        .catch((erro) => {
            alert(erro.response.data)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.irParaListaUsuario}>Ir para Lista de Usuário</button>
                <h2>Cadastro</h2>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handleNome}
                />
                <input 
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.handleEmail}/>
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}