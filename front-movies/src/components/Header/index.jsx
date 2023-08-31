import { Container, Profile, Logout } from "./styles";
import { Input } from "../Input";

import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header() {
    const { signOut, user } = useAuth();

    return (   
        <Container>
            <Link to="/">
                <h1>RocketMovies</h1>
            </Link>
            <Input placeholder="Pesquisar pelo titulo"></Input>
            <Profile>
                    <div>
                        <h2>{user.name}</h2>
                        <Logout onClick={signOut}>
                            Sair
                        </Logout>
                    </div>
                    <Link to="/profile">
                        <img src="https://github.com/wagnerpassos.png" alt="" />
                    </Link>
            </Profile>
        </Container>
    );
};