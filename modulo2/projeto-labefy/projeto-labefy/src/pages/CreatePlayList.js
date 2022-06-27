import React from "react";
import axios from "axios";

export default class CreatePlayList extends React.Component {
   state = {
    playlist: ""
   }

   handlePlayList = (e) => {
    this.setState({playlist: e.target.value})
   }

   cadastrarPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
        name: this.state.playlist
    }
    axios.post(url, body, {
        headers: {
            Authorization: "robinaldo-alves"
        }
    })
    .then((resposta) => {
        alert("PlayList Cadastrada Com Sucesso!")
        this.setState({playlist: ""})
    })
    .catch((erro) => {
        alert("Erro! Não é possivel cadastrar playlist!")
        //alert(`${erro.response.data}Erro! PlayList já cadastrada!`)
    })
   }

    render() {
    return (
      <div>
        <button onClick={this.props.irParaPlayList}>irParaPlayList</button>
        <h3>Cadastrar</h3>
        <input placeholder={"Cadastre uma Playlist"}
                value={this.state.playlist}
                onChange={this.handlePlayList}
        />
        <button onClick={this.cadastrarPlayList}>cadastrar</button>
      </div>
    )
  }
}