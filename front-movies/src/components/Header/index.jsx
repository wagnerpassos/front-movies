import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
    return (   
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo titulo"></Input>
            <Profile>
                <div>
                    <h2>Wagner Passos</h2>
                    <span>Sair</span>
                </div>
                <img src="https://github.com/wagnerpassos.png" alt="" />
            </Profile>
        </Container>
    );
};