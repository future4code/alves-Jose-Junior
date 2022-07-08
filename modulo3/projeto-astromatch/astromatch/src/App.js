import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";

const Div = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export default function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}


