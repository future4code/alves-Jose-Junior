import styled from "styled-components";

export const CardPlayList = styled.div `
    border: 1px solid black;
    font-style: oblique;
    font-family: Verdana;
    padding: 10px;
    margin: 10px;
    width: 30vw;
    display: flex;
    justify-content: space-between;
    &:hover {
        cursor: pointer;
        color: white;
        background-color: black;
    }
`