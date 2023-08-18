import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                    <span>Voltar</span>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/wagnerpassos.png" alt="" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="nova senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title="Salvar" />
            </Form>
        </Container>
    );
};