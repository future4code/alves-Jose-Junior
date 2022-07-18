import axios from "axios";
import { URL_BASE } from "../constants/Url";
import { useEffect, useState } from "react";

export const useTripList = () => {
    const [listaViagens, setListaViagens] = useState([])

    useEffect(() => {
        axios.get(`${URL_BASE}/trips`)
            .then((resposta) => {
                setListaViagens(resposta.data.trips)
            }).catch((erro) => {
                console.log(erro.response)
            })
    }, [])

    return listaViagens 
}