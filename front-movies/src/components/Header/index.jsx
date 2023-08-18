import { Input } from "../Input";
import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
    return (   
        <Container>
            <Link to="/">
                <h1>RocketMovies</h1>
            </Link>
            
            <Input placeholder="Pesquisar pelo titulo"></Input>
            <Profile>
                    <div>
                        <h2>Wagner Passos</h2>
                        <span>Sair</span>
                    </div>
                    <Link to="/profile">
                        <img src="https://github.com/wagnerpassos.png" alt="" />
                    </Link>
            </Profile>
        </Container>
    );
};