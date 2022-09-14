import { Button, TextField } from "@mui/material";
import React from "react";
import useForm from "../../hooks/useForm"
import { signUp } from "../../services/user";
import { InputsContainer, SignUpFormContainer } from "./Styled";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({setRightButtonText}) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        value={form.name}
                        name={'name'}
                        onChange={onChange}
                        label={'Nome'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField
                        value={form.email}
                        name={'email'}
                        onChange={onChange}
                        label={'E-mail'}
                        variant={'outlined'}
                        type={'email'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                    <TextField
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                        label={'Senha'}
                        variant={'outlined'}
                        type={'password'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                </InputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                Fazer Cadastro
                </Button>
            </SignUpFormContainer>
        </form>
    )
}

export default SignUpForm