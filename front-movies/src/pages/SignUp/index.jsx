import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";


export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Página para gerenciar seus links úteis!</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha"
                    icon={FiLock}
                />
                <Button title="Cadastrar" />
                <Link to="/auth">
                    <ButtonText title={"Voltar para o login"} isActive/>
                </Link>
            </Form>
            <Background/>
        </Container>
    );
};