import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api.js";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            if(!name || !email || !password)
                throw new Error("Preencha todos os campos");

            const result = await api.post("/user", {name, email, password });

            if(result.data.message)
                throw new Error(result.data.message);
            alert("Usuário cadastrado com sucesso!");
            navigate("/auth");
        } catch(error) {
            alert(error.message);
        }
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Página para gerenciar seus links úteis!</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button 
                    title="Cadastrar" 
                    onClick={(e) => handleSignUp(e)}
                />
                <Link to="/auth">
                    <ButtonText title={"Voltar para o login"} isActive/>
                </Link>
            </Form>
            <Background/>
        </Container>
    );
};