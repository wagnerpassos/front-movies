import { Avatar, Container, Form } from "./styles";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Profile() {
    const {user, updateProfile} = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    async function handleUpdate(e){
        e.preventDefault();

        const user = {
            name,
            email,
            password: newPassword,
            old_password: password
        }

        await updateProfile({user});
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <ButtonText icon={FiArrowLeft} title={"Voltar"} isActive/>
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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="email"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Input
                    placeholder="nova senha"
                    type="password"
                    icon={FiLock}
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                />
                <Button 
                    title="Salvar" 
                    onClick={handleUpdate}
                />
            </Form>
        </Container>
    );
};