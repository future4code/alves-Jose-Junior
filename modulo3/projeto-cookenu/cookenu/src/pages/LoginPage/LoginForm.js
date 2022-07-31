import React from "react";
import {  InputsContainer, } from "./Styled";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";


const LoginForm = () => {
    const [form, onChange] = useForm({email: "", password: "" })
//clear -> retirado para não quebrar o código
    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
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