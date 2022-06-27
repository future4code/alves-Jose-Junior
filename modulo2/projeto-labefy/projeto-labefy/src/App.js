import React from "react";
import axios from "axios";
import CreatePlayList from "./pages/CreatePlayList";
import PlayList from "./pages/playList";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
}

mudarTela = () => {
  switch (this.state.telaAtual){
    case "cadastro": 
      return <CreatePlayList irParaPlayList={this.irParaPlayList}/>
    case "playlist":
      return <PlayList irParaCadastro={this.irParaCadastro} />
    default: 
      return <CreatePlayList />
  }
}

irParaCadastro = () => {
 this.setState({telaAtual: "cadastro"})
}

irParaPlayList =() => {
  this.setState({telaAtual: "playlist"})
}

  render() {
    return (
      <div>
        {this.mudarTela()}
      </div>
    )
  }
}


