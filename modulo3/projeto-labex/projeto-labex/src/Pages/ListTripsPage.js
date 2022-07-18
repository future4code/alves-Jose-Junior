import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTripList } from "../Hooks/useTripList";
import { goToHome } from "../Router/coordinator";
import { goToApplicationFormPage } from "../Router/coordinator";

const CardInform = styled.div`
    text-shadow:#000 -1px -1px;
    color: white;
    display: flex; 
    justify-content: center; 
    border: solid 1px black;
    margin: 10px;
    flex-direction: column;
    box-shadow: 6px 6px 6px #969696;
    max-width: 380px;
    width: 100%;
    border-radius: 20px;
    max-height: 330px;
    p {
        margin: 10px;
    }
    background-image: radial-gradient(circle at 14.94% 43.82%, 
        #b58fb7 0,
        #8d7794 25%,
        #655c6c 50%,
        #434145 75%,
        #282a23 100%);
`

export const ListTripsPage = () => {
    const navigate = useNavigate()
    const listaViagens = useTripList()
    
    const newList = listaViagens.map((trip) => {
        return (
            <CardInform key={trip.id}>
                <p>Nome:{trip.name}</p>
                <p>Planeta:{trip.planet}</p>
                <p>Dia da Viagem:{trip.date}</p>
                <p>Quantidade em dia:{trip.durationInDays}</p>
                <p>Descrição:{trip.description}</p>
            </CardInform>
        )
    })

    return (
        <cardTrips>
            <p>
                <h2>Viagens</h2>
            </p>
            {newList}

            <button onClick={() => goToHome(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
        </cardTrips>
    )
}
