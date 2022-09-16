import React from "react";
import Cadastro from "./components/Cadastro";
import ListaUsuarios from "./components/ListaUsario";


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <Cadastro irParaListaUsuario={this.irParaListaUsuario}/>
      case "lista": 
        return <ListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada </div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaListaUsuario = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}

