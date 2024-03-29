import React from "react";
import {  InputsContainer, } from "./Styled";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setRightButtonText}) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({email: "", password: "" })
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setRightButtonText)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"email"}
                />
                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Fazer Login
                </Button>
            </form>
        </InputsContainer>
    )
}

export default LoginForm