import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";

export function SignIn() {

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça o seu login</h2>
                <Input
                    placeholder="E-mail"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    icon={FiLock}
                />
                <Button title="Entrar" />
                <Link to="/register">
                    <ButtonText title={"Criar conta"} isActive/>
                </Link>
            </Form>
            <Background/>
        </Container>
    );
};