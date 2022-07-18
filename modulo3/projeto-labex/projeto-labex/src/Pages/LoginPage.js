import React from "react";
import { goToHome } from "../Router/coordinator";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <p>Login Page</p>
            <input name="E-mail"
                placeholder="E-mail"
                type={"email"}
                required
            />
            <input
                placeholder="Senha"
                type={"password"}
                required
            />
            <button>Entrar</button>
            <button onClick={() => goToHome(navigate)}>Voltar</button>
        </div>
    )
}

