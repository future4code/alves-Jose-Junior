import React from "react";
import axios from "axios";
import styled from "styled-components";
import { CardPlayList } from "./styled";

// export const cardPlayList = styled.div`
//     border: 1px solid black;
//     padding: 10px;
//     margin: 10px;
//     display: flex;
//     justify-content: space-between;
// `

export default class PlayList extends React.Component {
    state = {
        playLists: []
    }

    componentDidMount() {
        this.pegarPlayList()
    }

    pegarPlayList = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url,{
            headers: {
                Authorization: "robinaldo-alves"
            }
        })
        .then((resposta)=>{
            this.setState({playLists: resposta.data.result.list})
        })
        .catch((erro)=>{
            alert("Erro!")
        })
    }

    deletarPlayList = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url,{
            headers: {
                Authorization: "robinaldo-alves"
            }
        })
        .then((resposta)=>{
            alert("PlayList acaba de ser deletada!")
            this.pegarPlayList()
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }
    render() {
        const playlist = this.state.playLists.map((user)=>{
            return (<CardPlayList key={user.id}>
                {user.name}
                <button onClick={()=> this.deletarPlayList(user.id)}>x</button>
                </CardPlayList>
            )
        })
    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Voltar</button>
        <h2>PlayList</h2>
            {playlist}
        </div>
    )
  }
}