import axios from "axios"
import React, { Component } from "react";

export default class List extends Component {
  state = {
    user: []
  }
}

getUsers = () => {
    axios
        .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`,
            {
                headers: {
                    authorization: "jose-junior-alves"
                }
            }
        )
        .then((resposta) => {
        this.setState({users: resposta.data.result.users})

        })  
        .catch((erro) => {
            console.log(erro.response)
        })

}
